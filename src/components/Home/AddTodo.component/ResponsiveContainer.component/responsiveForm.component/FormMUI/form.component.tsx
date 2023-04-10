import * as Yup from "yup";
import { useFormik } from "formik";
import { Children, ReactElement, ReactNode } from "react";
import Inputgenerator from "./inputgenerate/input.generator";
import Styles from "./form.module.scss";
type initialInputes = {
  children?: ReactElement | ReactElement[];
};

const Form = ({ children }: initialInputes) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required(" you should write the title !"),
      description: Yup.string(),
    }),
    onSubmit: async (value) => {
      const title = value.title;
      const date = value.date;
      const descrption = value.description;
      console.log(title, date, descrption);
      try {
      } catch (error) {}
    },
  });
  return (
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        isvalid={formik.touched.title && formik.errors.title ? true : false}
      />
      <Inputgenerator
        title="Discription"
        inputType="text"
        name={"description"}
        placeholder="Enter todo  description "
        id="userName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        isvalid={
          formik.touched.description && formik.errors.description ? true : false
        }
      />
      <Inputgenerator
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
  );
};

export default Form;
