import React from "react";
import MyPost from "./MyPost/MyPost";
import MyPostContainer from "./MyPost/MyPostContainer.jsx";
import s from "./Profile.module.css";
import ProfileIfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileIfo />
      <MyPostContainer store={props.store} />
    </div>
  );
};
export default Profile;
