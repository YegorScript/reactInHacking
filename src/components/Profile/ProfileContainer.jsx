import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfile(userId);
  }
  render() {
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
  };
};
let ProfileRouterContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getProfile })(ProfileRouterContainer);
