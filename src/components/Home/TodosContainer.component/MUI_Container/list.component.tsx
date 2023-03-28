import CardModal from "./cardModal/cardModal.component";
import React from "react";

import RenderCards from "./renderingCard";
const ListContainer = () => {
  const [modalDelete, setModalDelete] = React.useState<boolean>(false);

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
