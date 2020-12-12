import React from "react";
import MyPost from "./MyPost/MyPost";
import s from "./Profile.module.css";
import ProfileIfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  let posts = [
    { id: 1, message: "How are you?", like: 12 },
    { id: 2, message: "It`s my first project", like: 48 },
    { id: 3, message: "OH.My Hacker?", like: 12 },
  ];

  return (
    <div>
      <ProfileIfo />
      <MyPost posts={posts} />
    </div>
  );
};
export default Profile;
