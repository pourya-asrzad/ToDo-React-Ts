import CardModal from "./cardModal/cardModal.component";
import React from "react";

import RenderCards from "./renderingCard";
const ListContainer = () => {

  const content = RenderCards();

  return (
    <>
      <div className="">{content}</div>
    
    </>
  );
};
export default ListContainer;
