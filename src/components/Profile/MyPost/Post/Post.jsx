import React from "react";
import s from "./Post.module.css";
import usersIcon from "../../../../assets/images/users.jpg";
const Post = (props) => {
  return (
    <div className={s.items}>
      <img src={usersIcon} />
      <span className={s.item}>{props.message}</span>
      <div>like {props.like}</div>
    </div>
  );
};
export default Post;
