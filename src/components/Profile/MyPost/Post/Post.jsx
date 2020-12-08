import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.items}>
      <img src="https://st.depositphotos.com/1342206/1463/i/450/depositphotos_14634185-stock-photo-hackers-concept-digital-illustration.jpg" />
      <span className={s.item}>{props.message}</span>
      <div>like {props.like}</div>
    </div>
  );
};
export default Post;
