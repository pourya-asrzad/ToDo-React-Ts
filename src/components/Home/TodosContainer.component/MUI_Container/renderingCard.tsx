import {
  useGetTodosQuery,
  useGetDataQuery,
  useGetNewDataQuery,
  useFetchTodoLengthQuery,
} from "../../../../features/api/apiSlice";
import Cart from "../../../card/card.component";
import React, { ReactElement, useEffect, useState } from "react";
import Styles from "./spinner/sppiner.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";
import SkeletonComponent from "../../../card/skeleton.component";
import CardModal from "./cardModal/cardModal.component";
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
const RenderCards = (): ReactElement | ReactElement[] => {
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [items, setItems] = useState<any>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);
  const { data: firstData, isSuccess } = useGetDataQuery();
  const { data: againData } = useGetNewDataQuery(page);
  const { data } = useFetchTodoLengthQuery();
  useEffect(() => {
    if (isSuccess) {
      setItems(firstData);
    }
  }, [isSuccess]);

  //////////////////////////////////
  const fetchMoreData = async () => {
    setItems([...items, ...againData]);
    if (items.length + againData.length === data) {
      console.log("object");
      setHasMore(false);
    }
    setPage(page + 1);
  };
  ///////////////////////////////////////////////
  console.log(items);
  return isSuccess && items ? (
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
