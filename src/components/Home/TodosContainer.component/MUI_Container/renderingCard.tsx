import { useGetTodosQuery } from "../../../../features/api/apiSlice";
import Cart from "../../../card/card.component";
import React, { ReactElement } from "react";
import Styles from "./spinner/sppiner.module.scss";
const RenderCards = (): ReactElement | ReactElement[] => {
  const [modalDelete, setModalDelete] = React.useState<boolean>(false);
  const { data: Todos, isSuccess } = useGetTodosQuery();

  return !isSuccess ? (
    <>
      {" "}
      <div className={Styles["inner-circle"]}></div>
      <div className={Styles["outer-Circle"]}></div>
    </>
  ) : (
    Todos.map((item: any, i: number) => {
      return (
        <Cart setterDelete={setModalDelete} state={modalDelete} key={item.id} />
      );
    })
  );
};

export default RenderCards;
