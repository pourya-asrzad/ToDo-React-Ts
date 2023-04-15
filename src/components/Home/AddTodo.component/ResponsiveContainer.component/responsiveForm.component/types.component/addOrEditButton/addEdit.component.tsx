import Styles from "./addTodo.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../features/store/store";

const AddTodo = () => {
  const Action = useSelector((state: RootState) => state.itemSlice.action);
  console.log("toditype", Action);

  return (
    <>
      <button form="addTodo" className={Styles["add-todo"]}>
        {Action}
      </button>
    </>
  );
};

export default AddTodo;
