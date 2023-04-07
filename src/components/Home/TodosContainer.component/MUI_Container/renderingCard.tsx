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
import { ReactElement, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";
import SkeletonComponent from "../../../card/skeleton.component";
import { fakeArray, userOnline } from "../../../../utils/index.utils";
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
const RenderCards = (): ReactElement | ReactElement[] => {
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [items, setItems] = useState<any>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);
  const {
    data: firstData,
    isSuccess,
    isLoading,
    isError: errorInFirstData,
  } = useGetDataQuery();
  const { data: newData, isError: errorInNewData } = useGetNewDataQuery(page);
  const { data: dataLength } = useFetchTodoLengthQuery();
  useEffect(() => {
    if (isSuccess) {
      setItems(firstData);
    }
  }, [isSuccess]);

  //////////////////////////////////
  const fetchMoreData = async () => {
    setItems([...items, ...newData]);
    if (items.length + newData.length === dataLength) {
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
