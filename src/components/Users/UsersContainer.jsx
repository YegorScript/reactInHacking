import React from "react";
import { connect } from "react-redux";
import {
  FOLLOW,
  SET_USERS,
  UN_FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { UserAPI } from "../../API/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.TOGGLE_IS_FETCHING(true);

    UserAPI.getUsersContainer(this.props.currentPage, this.props.pageSize).then(
      (data) => {
        this.props.SET_USERS(data.items);
        this.props.SET_TOTAL_USERS_COUNT(100);
        // response.data.totalCount
        this.props.TOGGLE_IS_FETCHING(false);
      }
    );
  }
  onPageChanged = (pageNumber) => {
    this.props.SET_CURRENT_PAGE(pageNumber);
    this.props.TOGGLE_IS_FETCHING(true);
    UserAPI.getUsersContainer(pageNumber, this.props.pageSize).then((data) => {
      this.props.SET_USERS(data.items);
      this.props.TOGGLE_IS_FETCHING(false);
    });
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
          UN_FOLLOW={this.props.UN_FOLLOW}
          FOLLOW={this.props.FOLLOW}
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
  };
};
export default connect(mapStateToProps, {
  FOLLOW,
  UN_FOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
})(UsersAPIComponent);
