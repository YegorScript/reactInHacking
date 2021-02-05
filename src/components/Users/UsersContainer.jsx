import React from "react";
import axios from "axios";
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

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.TOGGLE_IS_FETCHING(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.SET_USERS(response.data.items);
        this.props.SET_TOTAL_USERS_COUNT(100);
        // response.data.totalCount
        this.props.TOGGLE_IS_FETCHING(false);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.SET_CURRENT_PAGE(pageNumber);
    this.props.TOGGLE_IS_FETCHING(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.SET_USERS(response.data.items);
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     FOLLOW: (userId) => {
//       dispatch(FOLLOW(userId));
//     },
//     UN_FOLLOW: (userId) => {
//       dispatch(UN_FOLLOW(userId));
//     },
//     SET_USERS: (users) => {
//       dispatch(SET_USERS(users));
//     },
//     SET_CURRENT_PAGE: (pageNumber) => {
//       dispatch(SET_CURRENT_PAGE(pageNumber));
//     },
//     SET_TOTAL_USERS_COUNT: (totalCount) => {
//       dispatch(SET_TOTAL_USERS_COUNT(totalCount));
//     },
//     TOGGLE_IS_FETCHING: (isFetching) => {
//       dispatch(TOGGLE_IS_FETCHING(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  FOLLOW,
  UN_FOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
})(UsersAPIComponent);
