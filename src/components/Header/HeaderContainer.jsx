import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { SET_USER_DATA } from "../../redux/authReducer";
import { UserAPI } from "../../API/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    UserAPI.Login().then((data) => {
      if (data.resultCode === 0) {
        let { Id, email, login } = data.data;
        this.props.SET_USER_DATA(Id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { SET_USER_DATA })(HeaderContainer);
