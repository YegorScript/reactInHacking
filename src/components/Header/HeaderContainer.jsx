import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { SET_USER_DATA } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { Id, email, login } = response.data.data;
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
