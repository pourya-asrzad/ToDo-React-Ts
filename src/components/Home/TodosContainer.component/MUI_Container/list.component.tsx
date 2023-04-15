import CardModal from "./cardModal/cardModal.component";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../features/store/store";

import RenderCards from "./renderingCard";
import { log } from "console";

const ListContainer = () => {
 
  let content = RenderCards();
 

  return (
    <>
      <div className="">{content}</div>
    </>
  );
};
export default ListContainer;
