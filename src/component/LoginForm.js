import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Id : </label>
      <input
        onChange={formik.handleChange}
        type="email"
        value={formik.values.email}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
