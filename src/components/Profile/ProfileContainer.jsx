import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { getProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfile(userId);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to="login" />;
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    getProfile: state.profilePage.getProfile,
    isAuth: state.auth.isAuth,
  };
};
let ProfileRouterContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getProfile })(ProfileRouterContainer);
