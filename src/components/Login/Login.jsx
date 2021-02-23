import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../validators/validators";
import { Input } from "../common/FormsControl/FormsControl";

const LoginForm = (props) => {
  return (
    <form onChange={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          placeholder={"Login"}
          name={"login"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field type={"checkbox"} component={Input} name={"rememberMe"} />
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

const onSubmit = (Formdata) => {
  console.log(Formdata);
};
const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
