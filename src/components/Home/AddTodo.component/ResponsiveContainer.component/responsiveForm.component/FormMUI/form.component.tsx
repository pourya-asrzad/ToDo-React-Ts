import * as Yup from "yup";
import { useFormik } from "formik";
import { ReactElement } from "react";
import Inputgenerator from "./inputgenerate/input.generator";
import Styles from "./form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../features/store/store";
import { useAddTodoMutation } from "../../../../../../features/api/apiSlice";

import { toast, ToastContainer } from "react-toastify";
import { addTodoToItems } from "../../../../../../features/slices/itemSlice";
type initialInputes = {
  children?: ReactElement | ReactElement[];

  title?: string;
  id?: string | number;
  description?: string;
  dueDate?: Date | string;
};

const Form = ({ children, title, id, description, dueDate }: initialInputes) => {
  const todoType = useSelector((state: RootState) => state.itemSlice.todoType);
  const [addTodo, { isLoading, isSuccess }] = useAddTodoMutation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: title ? title : "",
      description: description ? description : "",
      date: dueDate ? dueDate : "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required(" you should write the title !"),
      description: Yup.string().required("you should write the description"),
      date: Yup.string().required("you shoul choose the date"),
    }),
    onSubmit: async (value: any) => {
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
        dispatch(
          addTodoToItems({ dueDate: date, title, description, type: todoType })
        );
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
