import React from "react";
import MyPost from "./MyPost/MyPost";
import s from "./Profile.module.css";
import ProfileIfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileIfo />
      <MyPost />
    </div>
  );
};
export default Profile;
