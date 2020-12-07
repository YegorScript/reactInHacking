import React from "react";
import Post from "./Post/Post";
const MyPost = () => {
  return (
    <div>
      my posts
      <textarea></textarea>
      <button> add post</button>
      <div>
        <div>
          <Post message="How are you?" />
          <Post message="Its my first project!" like="48" />
        </div>
      </div>
    </div>
  );
};
export default MyPost;
