import React from "react";
import MyPost from "./MyPost/MyPost";
import s from "./Profile.module.css";
import ProfileIfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileIfo />
      <MyPost posts={props.state.posts} />
    </div>
  );
};
export default Profile;
