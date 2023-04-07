import ErrorImage from "../../../../assets/images/404.jpg";
import Styles from "./todocontainer.module.scss";
import NoConnection from "../../../../assets/images/noconnection.avif";
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

const RenderCards = (): ReactElement | ReactElement[] => {
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  // const { data: Todos, isSuccess } = useGetTodosQuery();
  const [items, setItems] = useState<any>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);

  const LIMIT_LINK: any = new URL(
    "https://6347eca8db76843976b5e973.mockapi.io/todos"
  );

  // useEffect(() => {
  //   console.log("object");
  // }, []);
  let initialized = false;

  useEffect(() => {
    if (!initialized) {
      const getData = async () => {
        LIMIT_LINK.searchParams.append("limit", 5);
        LIMIT_LINK.searchParams.append("page", 1);
        const res = await fetch(LIMIT_LINK);
        const data = await res.json();
        console.log(data.length > 0 ? "i have data" : " i don't have data");
        console.log(data);
        setItems(data);
      };
      getData();
      initialized = true;
    }
  }, []);

  const fetchNewData = async () => {
    LIMIT_LINK.searchParams.append("limit", 10);
    LIMIT_LINK.searchParams.append("page", `${page}`);
    const res = await fetch(LIMIT_LINK);
    const data = await res.json();
    return data;
  };
  const fetchMoreData = async () => {
    const newData = await fetchNewData();
    console.log([...items, ...newData]);
    setItems([...items, ...newData]);
    if (newData.length === 0 || newData.length < 10) {
      setHasMore(false);
    }
    setPage(page + 1);
  };
  ///////////////////////////////////////////////
  return isSuccess && items && isLoading == false ? (
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
      {errorInFirstData == false ? (
        fakeArray.map((items) => {
          return <SkeletonComponent key={items} />;
        })
      ) : (
        <>
          {userOnline ? (
            <img
              className={Styles.errorImage}
              src={ErrorImage}
              alt="ErrorImage"
            />
          ) : (
            <img
              className={Styles.errorImage}
              src={NoConnection}
              alt="ErrorImage"
            />
          )}
        </>
      )}
    </>
  );
};

export default RenderCards;
