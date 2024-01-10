import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextInput from "./MyTextInput";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(4, "Must be atleat 4 digit")
          .max(8, "must be smaller than 8 digit")
          .required("Required"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="form-container">
        <MyTextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />

        <div className="pwd-label">
          <MyTextInput
            label="Password"
            name="password"
            type="text"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
