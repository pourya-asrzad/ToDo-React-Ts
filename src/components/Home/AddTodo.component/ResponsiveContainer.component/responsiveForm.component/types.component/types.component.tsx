import TypeGenerator from "./generateType/type.generate";
import React from "react";
import Styles from "./types.module.scss";
import { useEffect, useState } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const ColorTypes = () => {
  const [modal, setModal] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState<
    number | string | undefined
  >();
  useEffect(() => {
    function hndleResize() {
      setWindowSize(getWindowSize());
      console.log(getWindowSize());
    }
    window.addEventListener("resize", hndleResize);
    return () => {
      window.removeEventListener("resize", hndleResize);
    };
  }, []);

  return (
    <>
      <div
        className={modal ? Styles["pallet-modal-layout"] : Styles["modal-off"]}
        style={{ height: windowSize + "px" }}
      >
        <TypeGenerator modalSetter={setModal} state={modal} />
      </div>
    </>
  );
};
export default ColorTypes;
function getWindowSize() {
  const innerHeight = window.innerHeight;

  return innerHeight;
}
