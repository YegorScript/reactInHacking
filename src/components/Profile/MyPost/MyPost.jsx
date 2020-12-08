import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";
let messages = [
  { id: 1, message: "How are you?", like: 12 },
  { id: 2, message: "It`s my first project", like: 48 },
  { id: 3, message: "OH.My Hacker?", like: 12 },
];
let messagesElement = messages.map((m) => (
  <Post message={m.message} id={m.id} like={m.like} />
));
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
        <div className={s.post}>{messagesElement}</div>
      </div>
    </div>
  );
};
export default MyPost;
