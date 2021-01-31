import { connect } from "react-redux";
import {
  FOLLOW,
  SET_USERS,
  UN_FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
} from "../../redux/usersReducer";
import Users from "./Users";
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    FOLLOW: (userId) => {
      dispatch(FOLLOW(userId));
    },
    UN_FOLLOW: (userId) => {
      dispatch(UN_FOLLOW(userId));
    },
    SET_USERS: (users) => {
      dispatch(SET_USERS(users));
    },
    SET_CURRENT_PAGE: (pageNumber) => {
      dispatch(SET_CURRENT_PAGE(pageNumber));
    },
    SET_TOTAL_USERS_COUNT: (totalCount) => {
      dispatch(SET_TOTAL_USERS_COUNT(totalCount));
    },
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
