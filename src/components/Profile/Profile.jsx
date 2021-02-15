import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer.jsx";
import ProfileIfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileIfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostContainer />
    </div>
  );
};
export default Profile;
