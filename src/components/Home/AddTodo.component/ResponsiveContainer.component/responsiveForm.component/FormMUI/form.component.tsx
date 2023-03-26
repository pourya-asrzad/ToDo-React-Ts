import { Children, ReactElement, ReactNode } from "react";
import Inputgenerator from "./inputgenerate/input.generator";

type initialInputes = {
  children: ReactElement | ReactElement[];
};

const Form = ({ children }: initialInputes) => {
  <>
    <div className="as">
      <>{Children}</>
    </div>
  </>;
};

export default Form;
