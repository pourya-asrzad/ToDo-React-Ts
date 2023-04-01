import Styles from "./addTodo.module.scss";
const AddTodo = ({ ...Action }) => {
  return (
    <>
      <button className={Styles["add-todo"]} onClick={() => console.log("")}>
        {Action ? "AddTodo" : "Edit"}
      </button>
    </>
  );
};

export default AddTodo;
