import Cart from "../../../card/card.component";
import CardModal from "./cardModal/cardModal.component";
import React from "react";

const ListContainer = () => {
  const [modalDelete, setModalDelete] = React.useState<boolean>(false);
  return (
    <>
      <Cart setterDelete={setModalDelete} state={modalDelete} />
      <CardModal
        visibility={true}
        state={modalDelete}
        modalSetter={setModalDelete}
      />
    </>
  );
};
export default ListContainer;
