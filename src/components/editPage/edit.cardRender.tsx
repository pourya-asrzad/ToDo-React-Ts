import * as React from "react";
import Box from "@mui/material/Box";
import * as Yup from "yup";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Styles from "./editPage.module.scss";
import { RootState } from "../../features/store/store";
import { useSelector, useDispatch } from "react-redux";
import ColorTypes from "../Home/AddTodo.component/ResponsiveContainer.component/responsiveForm.component/types.component/types.component";
import { useGetSingleDataQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import Form from "../Home/AddTodo.component/ResponsiveContainer.component/responsiveForm.component/FormMUI/form.component";
import { title } from "process";
import { useNavigate } from "react-router-dom";
import { hndleAction } from "../../features/slices/itemSlice";
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
export default function EditPage({
  open,

  setOpen,
}: hndleOpen) {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedCard = useSelector((state: RootState) =>
    state.itemSlice.items.filter((item: any) => item.id == id)
  );
  const dispatch = useDispatch();
  // function closeModal() {
  //   navigate("/");
  //   setOpen(false);
  // }
  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason === "backdropClick") {
      console.log(reason);
    } else {
      setOpen(false);
    }
  };
  const hndleModalClose = () => {
    dispatch(hndleAction("Add"));
    setOpen(false);
  };
  return (
    selectedCard[0] && (
      <div className={Styles["modal-section"]}>
        <Modal
          disableEscapeKeyDown={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className={Styles["delete-modal-layout"]}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <button className={Styles["btn"]} onClick={hndleModalClose}>
                X
              </button>
              <div className={Styles["modal-Edit"]}>
                <Form
                  setOpen={setOpen}
                  open={open}
                  title={selectedCard[0].title}
                  id={selectedCard[0].id}
                  description={selectedCard[0].description}
                  dueDate={selectedCard[0].dueDate}
                />
              </div>
              <ColorTypes />
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  );
}
