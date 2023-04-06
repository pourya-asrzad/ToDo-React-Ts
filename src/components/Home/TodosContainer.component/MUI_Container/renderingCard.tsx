import { useGetTodosQuery } from "../../../../features/api/apiSlice";
import Cart from "../../../card/card.component";
import React, { ReactElement, useEffect, useState } from "react";
import Styles from "./spinner/sppiner.module.scss";
import InfiniteScroll from 'react-infinite-scroll-component';
import {CircularProgress } from '@mui/material'

const RenderCards = (): ReactElement | ReactElement[] => {
  const [modalDelete, setModalDelete] = React.useState<boolean>(false);
  const { data: Todos, isSuccess } = useGetTodosQuery();
  const [items,setItems] = React.useState<any> ([])
  const [hasMore,setHasMore] = React.useState<boolean>(true)
  const [page,setPage] = React.useState<number>(2)
  
  const LIMIT_LINK:any = new URL("https://6347eca8db76843976b5e973.mockapi.io/todos");

  useEffect(()=>{
    const getData = async ()=>{
        LIMIT_LINK.searchParams.append('limit', 10);
        LIMIT_LINK.searchParams.append('page', 1)
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
  const fetchMoreData = async ()=>{
    console.log('hello');
    const newData = await fetchNewData()

    setItems([...items,...newData])
    if(newData.length === 0 || newData.length < 10){
      setHasMore(false)
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
