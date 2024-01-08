import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(4, "Must be atleat 4 digit")
        .max(8, "must be smaller than 8 digit")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Id : </label>
      <input
        onChange={formik.handleChange}
        id="email"
        type="email"
        {...formik.getFieldProps("email")}
      ></input>
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      <div>
        <label htmlFor="email">Password : </label>
        <input
          onChange={formik.handleChange}
          id="password"
          type="text"
          {...formik.getFieldProps("password")}
        ></input>
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
