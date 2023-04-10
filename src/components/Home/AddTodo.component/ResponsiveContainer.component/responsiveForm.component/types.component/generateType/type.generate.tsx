import Styles from "./pallet.module.scss";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
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

  ///////////////////////toggle modal

  //////////////////////////////////////
  const addTypeHandeling = (e: any) => {
    console.log(e.target.innerText);
    modalSetter(!state);
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  let content = palletTab.map((color, i) => {
    return (
      <button
        onClick={addTypeHandeling}
        style={{
          width: state ? "4.7rem" : "3.5rem",
          height: state ? "3.2rem" : "2.4rem",
          fontSize: state ? "large" : "small",
          color: "#47474f",
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
  document.body.style.overflow = state ? "hidden" : "visible";
  if (state) {
    document.body.style.overflow = "hidden";
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
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              marginLeft: "1rem",
            }}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default TypeGenerator;
