import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = (props) => {
  let postsElement = props.profilePage.map((m) => (
    <Post message={m.message} id={m.id} like={m.like} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.ADD_POST_ACTION_CREATE();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.UPDATE_NEW_POST_TEXT_ACTION_CREATE(text);
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
