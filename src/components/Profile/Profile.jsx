import React from "react";
import MyPost from "./MyPost/MyPost";
import s from "./Profile.module.css";
import ProfileIfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileIfo />
      <MyPost
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
export default Profile;
