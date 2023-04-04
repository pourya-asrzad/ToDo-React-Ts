import { ReactElement } from "react";
import Styles from "./cardModal.module.scss";
import React from "react";
import { ClientRequest } from "http";
import { height } from "@mui/system";
import { Javascript } from "@mui/icons-material";
type CardModal = {
  visibility?: true | false;
  modalSetter: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
};
const CardModal = ({ modalSetter, state }: CardModal): ReactElement => {
  const [currentCardY, setCurrentCardY] = React.useState<number>(0);
  const [currentCardX, setCurrentCardX] = React.useState<number>(0);

  ////////////////////////hndle position

  ///////////////////////////////////////////////////////////
  React.useEffect(() => {
    if (state) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
      window.scrollTo(currentCardX, currentCardY);
    }
  }, [state]);
  return (
    <>
      <div
        style={{
          visibility: state ? "visible" : "hidden",
        }}
        className={Styles["delete-modal-layout"]}
      >
        <div className={Styles["delete-modal"]}>
          <div className={Styles["modal-close"]}>
            <button onClick={() => modalSetter(!state)}>X</button>
          </div>
          <div className={Styles[""]}>
            <span>Do you want to delete this item ?!</span>
          </div>
          <div className={Styles["modal-actions-container"]}>
            <button className={Styles[""]}>Delete</button>
            <button className={Styles[""]}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardModal;
