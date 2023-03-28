import Cart from "../../../card/card.component";
import CardModal from "./cardModal/cardModal.component";
import React from "react";
import { useGetTodosQuery } from "../../../../features/api/apiSlice";
import RenderCards from "./renderingCard";
const ListContainer = () => {
  const [modalDelete, setModalDelete] = React.useState<boolean>(false);
  const { data: Todos, isSuccess } = useGetTodosQuery();
  console.log(Todos);

  const content = RenderCards();

  return (
    <>
      <div className="">{content}</div>
      <CardModal
        visibility={true}
        state={modalDelete}
        modalSetter={setModalDelete}
      />
    </>
  );
};
export default ListContainer;
