import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../validators/validators";
import { Input } from "../common/FormsControl/FormsControl";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          placeholder={"Email"}
          name={"email"}
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
      {props.error && (
        <div style={{ color: "red", fontWeight: "bold" }}>{props.error}</div>
      )}
      <div>
        <button> login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
