import {
  useGetTodosQuery,
  useGetDataQuery,
  useGetNewData,
  fetchNewData,
} from "../../../../features/api/apiSlice";
import Cart from "../../../card/card.component";
import React, { ReactElement, useEffect, useState } from "react";
import Styles from "./spinner/sppiner.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";
import SkeletonComponent from "../../../card/skeleton.component";
import CardModal from "./cardModal/cardModal.component";
const RenderCards = (): ReactElement | ReactElement[] => {
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  // const { data: Todos, isSuccess } = useGetTodosQuery();
  const [items, setItems] = useState<any>(null);
  const [newItems, setNewItems] = useState<any>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);
  const { data: firstData, isSuccess } = useGetDataQuery();
  //const { data: newIncomeData, isSuccess: isCompelete } = useGetNewData(page);
  //const { data: newGetData, isSuccess: isCompelete } = useGetNewData();
  //const hoop = isCompelete ? newGetData : null;
  //console.log("hh", hoop);

  const LIMIT_LINK: any = new URL(
    "https://6347eca8db76843976b5e973.mockapi.io/todos"
  );
  console.log(LIMIT_LINK);

  // useEffect(() => {
  //   console.log("object");
  // }, []);
  let initialized = false;

  useEffect(() => {
    if (isSuccess) {
      console.log(firstData);
      setItems(firstData);
    }
    initialized = true;
  }, [isSuccess]);
  //////////////////////////////////
  // useEffect(() => {
  //   if (isCompelete) {
  //     setNewItems(newIncomeData);
  //     console.log(newItems);
  //   }
  // }, [isCompelete, newIncomeData]);
  ///////////////////////////////////////////////

  const fetchMoreData = async () => {
    const newData = await fetchNewData(LIMIT_LINK, page);
    console.log([...items, ...newData]);
    setItems([...items, ...newData]);
    if (newData.length === 0 || newData.length < 10) {
      setHasMore(false);
    }
    setPage(page + 1);
  };
  return items ? (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<CircularProgress />}
      endMessage={
        <p>
          <b>end of list tasks!!</b>
        </p>
      }
    >
      {items.map((item: any) => {
        return (
          <>
            <SkeletonComponent />
            <Cart
              setterDelete={setModalDelete}
              state={modalDelete}
              key={item.id}
            />
            <CardModal state={modalDelete} modalSetter={setModalDelete} />
          </>
        );
      })}
    </InfiniteScroll>
  ) : (
    <>
      {" "}
      <div className={Styles["inner-circle"]}></div>
      <div className={Styles["outer-Circle"]}></div>
    </>
  );
};

export default RenderCards;
