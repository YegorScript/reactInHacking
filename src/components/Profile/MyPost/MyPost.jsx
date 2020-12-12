import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = (props) => {
  let postsElement = props.posts.map((m) => (
    <Post message={m.message} id={m.id} like={m.like} />
  ));
  return (
    <div className={s.mp}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button> add post</button>
      </div>
      <div>
        <div className={s.post}>{postsElement}</div>
      </div>
    </div>
  );
};
export default MyPost;
