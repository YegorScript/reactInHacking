import { connect } from "react-redux";
import {
  ADD_POST_ACTION_CREATE,
  UPDATE_NEW_POST_TEXT_ACTION_CREATE,
} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ADD_POST_ACTION_CREATE: () => {
      dispatch(ADD_POST_ACTION_CREATE());
    },
    UPDATE_NEW_POST_TEXT_ACTION_CREATE: (text) => {
      let action = UPDATE_NEW_POST_TEXT_ACTION_CREATE(text);
      dispatch(action);
    },
  };
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;
