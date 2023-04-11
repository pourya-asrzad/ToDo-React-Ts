import ColorTypes from "./types.component/types.component";
import Form from "./FormMUI/form.component";
import Styles from "./responsiveForm.module.scss";
import AddTodo from "./types.component/addOrEditButton/addEdit.component";
const ResponsiveForm = () => {
  return (
    <>
      <div className={Styles["form-container"]}>
        <Form />
        <ColorTypes />
        <AddTodo  />
      </div>
    </>
  );
};
export default ResponsiveForm;
