import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";
import {
  ADD_POST_ACTION_CREATE,
  UPDATE_NEW_POST_TEXT_ACTION_CREATE,
} from "../../../redux/state";

const MyPost = (props) => {
  let postsElement = props.posts.map((m) => (
    <Post message={m.message} id={m.id} like={m.like} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(ADD_POST_ACTION_CREATE());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(UPDATE_NEW_POST_TEXT_ACTION_CREATE(text));
  };

  return (
    <div className={s.mp}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}> add post</button>
      </div>
      <div>
        <div className={s.post}>{postsElement}</div>
      </div>
    </div>
  );
};
export default MyPost;
