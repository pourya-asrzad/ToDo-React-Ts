import { ReactNode } from "react";
import Styles from "./inputGenerat.module.scss";
type InputType = {
  title: string;
  inputType: string;
};
const Inputgenerator = ({ title, inputType }: InputType) => {
  return (
    <>
      <div className={Styles["input-generator"]}>
        <label className="" htmlFor="">
          {title ? title + " :" : "<label>:"}
        </label>
        <input
          className={Styles["input-generat"]}
          type={inputType ? inputType : "text"}
        />
      </div>
    </>
  );
};
export default Inputgenerator;
