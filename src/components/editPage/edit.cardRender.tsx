import * as React from "react";
import Box from "@mui/material/Box";
import * as Yup from "yup";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Styles from "./editPage.module.scss";
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
  const {
    data: SingleData,
    isSuccess,
    isError,
    isLoading,
  } = useGetSingleDataQuery(id);
  function closeModal() {
    navigate("/");
    setOpen(false);
  }
  return (
    isSuccess && (
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
                  title={SingleData.title}
                  id={SingleData.id}
                  description={SingleData.description}
                  date={SingleData.date}
                />
              </div>
              <ColorTypes />
              <div className="btn-edit-modal">
                <button onClick={() => console.log("")}>Edit</button>
                <button onClick={() => closeModal()}>Cancel</button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  );
}
