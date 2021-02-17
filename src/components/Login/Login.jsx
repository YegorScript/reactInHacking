import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onChange={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
        remember me
      </div>
      <div>
        <button> login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
const onChange = (Formdata) => {
  console.log(Formdata);
};
const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onChange={onChange} />
    </div>
  );
};
export default Login;
