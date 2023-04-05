import {
  useGetTodosQuery,
  useGetDataQuery,
  useGetNewDataQuery,
  fetchNewData,
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
  const { data: firstData, isSuccess } = useGetDataQuery(2);
  const { data: newIncomeData, isSuccess: done } = useGetNewDataQuery(page);
  const [newData, setNewData] = useState<any>(null);

  useEffect(() => {
    if (isSuccess) {
      setItems(firstData);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (done && hasMore !== false) {
      setNewData(newIncomeData);
    }
  }, [done, page, newIncomeData]);

  //////////////////////////////////
  const fetchMoreData = () => {
    // console.log([...items, ...newData]);
    // console.log("newIncomeData", newData);

    setItems([...items, ...newData]);
    if (newData.length === 0 || newData.length < 10) {
      console.log("finished", items);

      setHasMore(false);
    }
    setPage(page + 1);
  };
  ///////////////////////////////////////////////

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
