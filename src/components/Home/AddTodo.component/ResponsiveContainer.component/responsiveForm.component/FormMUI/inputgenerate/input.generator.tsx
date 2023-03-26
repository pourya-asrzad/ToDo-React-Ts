import { ReactNode } from "react";

type InputType = {
  title: string;
  inputType: string;
};
const Inputgenerator = ({ title, inputType }: InputType) => {
  return (
    <>
      <div className="">
        <label htmlFor="">{title ? title : "<label>"}</label>
        <input type={inputType ? inputType : "text"} />
      </div>
    </>
  );
};
export default Inputgenerator;
