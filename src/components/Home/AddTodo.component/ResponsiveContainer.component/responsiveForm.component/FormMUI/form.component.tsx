import { Children, ReactElement, ReactNode } from "react";
import Inputgenerator from "./inputgenerate/input.generator";
import Styles from "./form.module.scss";
type initialInputes = {
  children?: ReactElement | ReactElement[];
};

const Form = ({ children }: initialInputes) => {
  const inputContent = [
    { title: "Title", type: "text" },
    { title: "Discription", type: "text" },
    { title: "Due Date", type: "date" },
  ];
  let content = inputContent.map((item, index) => {
    return (
      <Inputgenerator key={index} title={item.title} inputType={item.type} />
    );
  });

  return (
    <>
      <div className={Styles["form-container"]}>
        <>{content}</>
      </div>
    </>
  );
};

export default Form;
