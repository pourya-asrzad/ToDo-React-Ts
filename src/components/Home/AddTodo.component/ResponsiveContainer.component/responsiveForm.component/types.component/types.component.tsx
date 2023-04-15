import TypeGenerator from "./generateType/type.generate";
import React from "react";
import Styles from "./types.module.scss";
import { useEffect, useState } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const ColorTypes = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <div
        className={modal ? Styles["pallet-modal-layout"] : Styles["modal-off"]}
      >
        <TypeGenerator modalSetter={setModal} state={modal} />
      </div>
    </>
  );
};
export default ColorTypes;
