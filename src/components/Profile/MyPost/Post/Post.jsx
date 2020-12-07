import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://st.depositphotos.com/1342206/1463/i/450/depositphotos_14634185-stock-photo-hackers-concept-digital-illustration.jpg" />
      <div className={s.item}>{props.message}</div>
      <span>like {props.like}</span>
    </div>
  );
};
export default Post;
