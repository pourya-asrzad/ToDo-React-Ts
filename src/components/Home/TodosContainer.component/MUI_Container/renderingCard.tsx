import { useGetTodosQuery } from "../../../../features/api/apiSlice";
import Cart from "../../../card/card.component";
import React, { ReactElement } from "react";
const RenderCards = (): ReactElement | ReactElement[] => {
  const [modalDelete, setModalDelete] = React.useState<boolean>(false);
  const { data: Todos, isSuccess } = useGetTodosQuery();

  return !isSuccess ? (
    <span>Loading</span>
  ) : (
    Todos.map((item: any, i: number) => {
      return (
        <Cart setterDelete={setModalDelete} state={modalDelete} key={item.id} />
      );
    })
  );
};

export default RenderCards;
