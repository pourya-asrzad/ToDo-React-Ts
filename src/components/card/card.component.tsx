import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./card.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardModal from "../Home/TodosContainer.component/MUI_Container/cardModal/cardModal.component";
import React from "react";

import { useNavigate } from "react-router-dom";

import { hndleAction } from "../../features/slices/itemSlice";
import EditPage from "../editPage/edit.cardRender";
type cardOptions = {
  state: boolean;
  setterDelete: React.Dispatch<React.SetStateAction<boolean>>;
  info: any;
  id: number | string;
  action?: string;
};
const Cart = ({ state, setterDelete, info, id, action }: cardOptions) => {
  const [toggelBox, setToggeleBox] = useState(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [openEdit, setopenEdit] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hndleEdit = () => {
    dispatch(hndleAction("Edit"));
    navigate(`/editItem/${id}`);
    setopenEdit(true);
  };

  const moreButton = () => {
    setToggeleBox(true);
  };
  const lessButton = () => {
    setToggeleBox(false);
  };

  const bull = (
    <Box
      component="span"
      sx={{
        color: "red",
        display: "inline-block",
        mx: "2px",
        transform: "scale(0.8)",
      }}
    >
      •
    </Box>
  );
  return (
    <>
      <Card
        className={
          !toggelBox
            ? styles["card-container"]
            : styles["card-container-toggle"]
        }
      >
        <CardContent>
          <Typography className={styles["card-title"]} component="div">
            {info.title} {bull}
          </Typography>
          <div className={styles["card-detail"]}>
            <div className={styles["card-paragragh"]}>
              {" "}
              <p
                className={
                  !toggelBox ? styles["card-text"] : styles["card-text-toggle"]
                }
              >
                {info.description}
              </p>
              <div className={styles["text-button"]}>
                <span
                  onClick={moreButton}
                  className={
                    !toggelBox ? styles["card-text-option"] : styles["hidden"]
                  }
                >
                  more
                </span>
                <span
                  onClick={lessButton}
                  className={
                    toggelBox ? styles["card-text-option"] : styles["hidden"]
                  }
                >
                  less
                </span>
              </div>
            </div>
            <div className={styles["card-buttons"]}>
              <button
                onClick={() => hndleEdit()}
                className={styles["card-button"]}
              >
                Edit
              </button>
              <button
                onClick={() => setOpen(true)}
                className={styles["card-button"]}
              >
                Delete
              </button>
              <CardModal open={open} setOpen={setOpen} />
            </div>
          </div>
        </CardContent>
      </Card>
      <EditPage setOpen={setopenEdit} open={openEdit} />
    </>
  );
};
export default Cart;
