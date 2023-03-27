import Styles from "./pallet.module.scss";
import usestate from "react";
import React from "react";
type ColorPad = {
  pallet?: [];
  modalSetter: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
};
const MAIN_RGB = [
  { color: "#FF0000", title: "sport" },
  { color: "#00FF00", title: "health" },
  { color: "#0000FF", title: "work" },
  { color: "#FF00FF", title: "family" },
  { color: "#FFEDCD", title: "meeting" },
  { color: "#ED00C2", title: "food" },
];
const palletStyle = {
  margin: " 1rem 0.5rem",
  width: "20px",
  height: "20px",
};
const TypeGenerator = ({ pallet, state, modalSetter }: ColorPad) => {
  let palletTab = pallet ? pallet : MAIN_RGB;
  console.log(palletTab);

  ///////////////////////toggle modal

  //////////////////////////////////////
  let content = palletTab.map((color, i) => {
    console.log(color);

    return (
      <button
        style={{
          width: "3.5rem",
          height: "2rem",
          color: "#474747",
          cursor: "pointer",
          borderRadius: "4px",
          background: `${color.color}`,
        }}
        className={Styles["pallet-item"]}
        key={i}
      >
        {color.title}
      </button>
    );
  });

  if (state) {
    return (
      <div className={Styles["pallet-modal-layout"]}>
        <div className={Styles["modal-action"]}>
          <label className={Styles["types-title"]}>Types</label>
          <button
            className={Styles["btn-off"]}
            onClick={() => modalSetter(!state)}
          >
            X
          </button>
        </div>
        <div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
          >
            {" "}
            {content}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={Styles["pallet-modal-layout-off"]}>
        {content[0]}
        {content[1]}
        <span
          className={Styles["span-more"]}
          onClick={() => modalSetter(!state)}
        >
          more
        </span>
      </div>
    </>
  );
};

export default TypeGenerator;
