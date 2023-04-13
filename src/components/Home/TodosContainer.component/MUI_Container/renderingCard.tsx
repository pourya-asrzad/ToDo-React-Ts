import ErrorImage from "../../../../assets/images/404.jpg";
import Styles from "./todocontainer.module.scss";
import NoConnection from "../../../../assets/images/noconnection.avif";
import {
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
import { useSelector, useDispatch } from "react-redux";
import itemSlice, { setItems } from "../../../../features/slices/itemSlice";
import type { RootState } from "../../../../features/store/store";

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
const RenderCards = (): ReactElement | ReactElement[] => {
  const itemsArry = useSelector((state: RootState) => state.itemSlice.items);
  const dispatch = useDispatch();

  const [modalDelete, setModalDelete] = useState<boolean>(false);
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
      dispatch(setItems(firstData));
    }
  }, [isSuccess]);

  //////////////////////////////////
  const fetchMoreData = async () => {
    dispatch(setItems([...itemsArry, ...newData]));
    if (itemsArry.length + newData.length === dataLength) {
      setHasMore(false);
      console.log(itemsArry);
    }
    setPage(page + 1);
  };
  ///////////////////////////////////////////////
  return isSuccess && itemsArry && isLoading == false ? (
    <InfiniteScroll
      dataLength={itemsArry.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<CircularProgress />}
      endMessage={
        <p>
          <b>end of list tasks!!</b>
        </p>
      }
    >
      {itemsArry.map((item: any) => {
        console.log("Date", item);

        return (
          <>
            <Cart
              setterDelete={setModalDelete}
              state={modalDelete}
              key={item.id}
              info={item}
              id={item.id}
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
