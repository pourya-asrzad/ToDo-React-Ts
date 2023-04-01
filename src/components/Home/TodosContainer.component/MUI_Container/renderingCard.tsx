import { useGetTodosQuery } from "../../../../features/api/apiSlice";
import Cart from "../../../card/card.component";
import React, { ReactElement } from "react";
import Styles from "./spinner/sppiner.module.scss";
import InfiniteScroll from 'react-infinite-scroll-component';
import { API_LINK } from "../../../../api/apis";
const RenderCards = (): ReactElement | ReactElement[] => {
  const [modalDelete, setModalDelete] = React.useState<boolean>(false);
  const { data: Todos, isSuccess } = useGetTodosQuery();
  const [items,setItems] = React.useState(Todos)
  const data = React.useMemo(() => items, [items]);
  const fetchMoreData=()=>{
    setTimeout(()=>{
      setItems(items.concat(Todos(2)))
    },1500)
  }
  console.log(API_LINK);
  
  return !isSuccess ? (
    <>
      {" "}
      <div className={Styles["inner-circle"]}></div>
      <div className={Styles["outer-Circle"]}></div>
    </>
  ) : (
  //   <InfiniteScroll
  //   dataLength={data}
  //   next={()=>fetchMoreData}
  //   hasMore={true}
  //   loader={<h4>Loading...</h4>}
  // >
     Todos.map((item: any, i: number) => {
      return (
        <Cart setterDelete={setModalDelete} state={modalDelete} key={item.id} />
      );
    })
  // </InfiniteScroll>
 
  );
};

export default RenderCards;
