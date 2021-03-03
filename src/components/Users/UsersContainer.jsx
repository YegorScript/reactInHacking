import React from "react";
import { connect } from "react-redux";
import {
  SET_CURRENT_PAGE,
  TOGGLE_IS_FOLLOWING,
  requestUsers,
  follow,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingIsProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux//usersSelectors";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingIsProgress={this.props.followingIsProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingIsProgress: getFollowingIsProgress(state),
  };
};
export default compose(
  connect(mapStateToProps, {
    SET_CURRENT_PAGE,
    TOGGLE_IS_FOLLOWING,
    requestUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersAPIComponent);
