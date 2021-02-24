import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authMe, logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authLogin: state.auth.authLogin,
  };
};
export default connect(mapStateToProps, { authMe, logout })(HeaderContainer);
