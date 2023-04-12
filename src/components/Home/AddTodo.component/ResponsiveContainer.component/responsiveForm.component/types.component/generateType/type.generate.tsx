import Styles from "./pallet.module.scss";
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { setTodoType } from "../../../../../../../features/slices/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RootState } from "../../../../../../../features/store/store";
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
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const TypeGenerator = ({ pallet, state, modalSetter }: ColorPad) => {
  let palletTab = pallet ? pallet : MAIN_RGB;
  const dispatch = useDispatch();
  ///////////////////////toggle modal
  const type = useSelector((state: RootState) => state.itemSlice.todoType);
  //////////////////////////////////////
  const addTypeHandeling = (e: any) => {
    modalSetter(!state);
    dispatch(setTodoType(e.target.innerText));
    console.log(e.target.style.backgroundColor);

    toast.success("type aaded!", {
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
  useEffect(() => {
    document.body.style.overflow = state ? "hidden" : "visible";
  }, [state]);

  if (state) {
    document.body.style.overflow = "hidden";
    return (
      <div className={Styles["pallet-modal-layout"]}>
        <Modal
          open={state}
          onClose={() => modalSetter(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className={Styles["delete-modal-layout"]}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Types</span>
                <button
                  className={Styles["btn-off"]}
                  onClick={() => modalSetter(!state)}
                >
                  X
                </button>
              </div>
              <div>{content}</div>
            </Typography>
          </Box>
        </Modal>
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
