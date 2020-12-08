import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";
const MyPost = () => {
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
        <div className={s.post}>
          <Post message="How are you?" like="0" />
          <Post message="Its my first project!" like="48" />
        </div>
      </div>
    </div>
  );
};
export default MyPost;
