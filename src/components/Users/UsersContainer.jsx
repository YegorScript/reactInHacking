import React from "react";
import { connect } from "react-redux";
import {
  SET_CURRENT_PAGE,
  TOGGLE_IS_FOLLOWING,
  getUsers,
  follow,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingIsProgress: state.usersPage.followingIsProgress,
  };
};
export default withAuthRedirect(
  connect(mapStateToProps, {
    SET_CURRENT_PAGE,
    TOGGLE_IS_FOLLOWING,
    getUsers,
    follow,
    unfollow,
  })(UsersAPIComponent)
);
