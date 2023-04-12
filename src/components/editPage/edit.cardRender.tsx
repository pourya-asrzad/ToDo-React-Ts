import * as React from "react";
import Box from "@mui/material/Box";
import * as Yup from "yup";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Styles from "./editPage.module.scss";
import { RootState } from "../../features/store/store";
import { useSelector } from "react-redux";
import ColorTypes from "../Home/AddTodo.component/ResponsiveContainer.component/responsiveForm.component/types.component/types.component";
import { useGetSingleDataQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import Form from "../Home/AddTodo.component/ResponsiveContainer.component/responsiveForm.component/FormMUI/form.component";
import { title } from "process";
import { useNavigate } from "react-router-dom";
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
  function closeModal() {
    navigate("/");
    setOpen(false);
  }
  return (
    selectedCard[0] && (
      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className={Styles["delete-modal-layout"]}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className={Styles["modal-Edit"]}>
                <Form
                  title={selectedCard[0].title}
                  id={selectedCard[0].id}
                  description={selectedCard[0].description}
                  dueDate={selectedCard[0].dueDate}
                />
              </div>
              <ColorTypes />
              <div
                className={Styles["modal-actions-container"]}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <button
                  className={Styles["btn-edit-modal"]}
                  type="submit"
                  form="EditTodo"
                >
                  Edit
                </button>
                <button
                  className={Styles["btn-edit-modal"]}
                  onClick={() => closeModal()}
                >
                  Cancel
                </button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  );
}
