import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="text-label">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props}></input>
      {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;
