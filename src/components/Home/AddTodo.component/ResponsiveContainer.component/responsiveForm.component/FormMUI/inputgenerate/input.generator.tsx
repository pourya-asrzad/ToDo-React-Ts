import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import Styles from "./inputGenerat.module.scss";
type InputType = {
  title?: string;
  inputType?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  value?: any;
  isvalid?: boolean;
};
const Inputgenerator = ({
  title,
  inputType,
  placeholder,
  id,
  isvalid,
  name,
  onBlur,
  onChange,
  value,
}: InputType) => {
  return (
    <>
      <div className={Styles["input-generator"]}>
        <label className="" htmlFor="">
          {title ? title + " :" : "<label>:"}
        </label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder}
          id={id}
          value={value}
          className={Styles["input-generat"]}
          type={inputType ? inputType : "text"}
        />
      </div>
    </>
  );
};
export default Inputgenerator;
