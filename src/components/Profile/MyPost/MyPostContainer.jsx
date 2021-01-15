import React from "react";
import {
  ADD_POST_ACTION_CREATE,
  UPDATE_NEW_POST_TEXT_ACTION_CREATE,
} from "../../../redux/profileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(ADD_POST_ACTION_CREATE());
  };
  let onPostChange = (text) => {
    let action = UPDATE_NEW_POST_TEXT_ACTION_CREATE(text);
    props.store.dispatch(action);
  };

  return (
    <MyPost
      UPDATE_NEW_POST_TEXT_ACTION_CREATE={onPostChange}
      ADD_POST_ACTION_CREATE={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostContainer;
