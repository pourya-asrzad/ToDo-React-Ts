import Styles from "./addTodo.module.scss";
const AddTodo = ({ ...Action }) => {
  return (
    <>
      <button className={Styles["add-todo"]}>
        {Action ? "AddTodo" : "Edit"}
      </button>
    </>
  );
};

export default AddTodo;
