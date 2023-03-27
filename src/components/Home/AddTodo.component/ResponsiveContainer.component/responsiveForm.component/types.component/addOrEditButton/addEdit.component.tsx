import Styles from "./addTodo.module.scss";
const AddTodo = () => {
  return (
    <>
      <button className={Styles["add-todo"]} onClick={() => console.log("")}>
        AddTodo
      </button>
    </>
  );
};

export default AddTodo;
