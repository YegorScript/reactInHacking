import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { SET_USER_PROFILE } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.SET_USER_PROFILE(response.data);
      });
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
  };
};
export default connect(mapStateToProps, { SET_USER_PROFILE })(ProfileContainer);
