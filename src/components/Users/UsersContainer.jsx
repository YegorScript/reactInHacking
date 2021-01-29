import { connect } from "react-redux";
import { FOLLOW, SET_USERS, UN_FOLLOW } from "../../redux/usersReducer";
import Users from "./UsersC";
const mapStateToProps = (state) => {
  return { users: state.usersPage.users };
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
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
