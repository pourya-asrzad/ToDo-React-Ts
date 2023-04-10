import * as Yup from "yup";
import { useFormik } from "formik";
import { ReactElement } from "react";
import Inputgenerator from "./inputgenerate/input.generator";
import Styles from "./form.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../features/store/store";
import { useAddTodoMutation } from "../../../../../../features/api/apiSlice";

import { toast, ToastContainer } from "react-toastify";
type initialInputes = {
  children?: ReactElement | ReactElement[];
};

const Form = ({ children }: initialInputes) => {
  const todoType = useSelector((state: RootState) => state.itemSlice.todoType);
  const [addTodo, { isLoading, isSuccess }] = useAddTodoMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required(" you should write the title !"),
      description: Yup.string().required("you shoul write the description"),
      date: Yup.string().required("you shoul choose the date"),
    }),
    onSubmit: async (value) => {
      try {
        const title = value.title;
        const date = value.date;
        const description = value.description;
        console.log(title, date, description, todoType);
        addTodo({ dueDate: date, title, description, type: todoType });
        toast.success("todo added !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {
        alert(error);
      }
    },
  });
  return (
    <>
      <form
        id="addTodo"
        onSubmit={formik.handleSubmit}
        className={Styles["form-container"]}
      >
        <Inputgenerator
          title="Title"
          inputType="text"
          name={"title"}
          placeholder="Enter todo title"
          id="userName"
          errorMsg={
            formik.touched.title && formik.errors.title && formik.errors.title
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          isvalid={formik.touched.title && formik.errors.title ? true : false}
        />
        <Inputgenerator
          errorMsg={
            formik.touched.description &&
            formik.errors.description &&
            formik.errors.description
          }
          title="Discription"
          inputType="text"
          name={"description"}
          placeholder="Enter todo  description "
          id="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          isvalid={
            formik.touched.description && formik.errors.description
              ? true
              : false
          }
        />
        <Inputgenerator
          errorMsg={
            formik.touched.date && formik.errors.date && formik.errors.date
          }
          title="Due Date"
          inputType="date"
          name={"date"}
          id="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          isvalid={formik.touched.date && formik.errors.date ? true : false}
        />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Form;
