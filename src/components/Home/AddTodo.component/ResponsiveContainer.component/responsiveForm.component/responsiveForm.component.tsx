import ColorTypes from "./types.component/types.component";
import Form from "./FormMUI/form.component";
import Styles from "./responsiveForm.module.scss";
import AddTodo from "./types.component/addOrEditButton/addEdit.component";
import { RootState } from "../../../../../features/store/store";
import { useSelector } from "react-redux";
const ResponsiveForm = () => {
  const mode = useSelector((state: RootState) => state.itemSlice.action);
  return (
    <>
      <div
        style={{ visibility: mode === "Add" ? "visible" : "hidden" }}
        className={Styles["form-container"]}
      >
        <Form />
        <ColorTypes />
        <AddTodo />
      </div>
    </>
  );
};
export default ResponsiveForm;
