import React from "react";
import MyPost from "./MyPost/MyPost";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://x6w8x9r7.rocketcdn.me/wp-content/uploads/Hacking-optimised.jpg" />
      </div>
      <div>ava description</div>
      <MyPost />
    </div>
  );
};
export default Profile;
