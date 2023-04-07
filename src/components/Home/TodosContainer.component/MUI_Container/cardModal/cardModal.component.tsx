import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Styles from "./cardModal.module.scss";
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

type hndleOpen = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  open: boolean;
};
export default function CardModal({
  open,

  setOpen,
}: hndleOpen) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={Styles["delete-modal-layout"]}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className={Styles["delete-modal"]}>
              <div className={Styles["modal-close"]}>
                <button onClick={() => setOpen(false)}>X</button>
              </div>
              <div className={Styles[""]}>
                <span>Do you want to delete this item ?!</span>
              </div>
              <div className={Styles["modal-actions-container"]}>
                <button className={Styles["btn-modal"]}>Delete</button>
                <button className={Styles["btn-modal"]} onClick={() => setOpen(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
