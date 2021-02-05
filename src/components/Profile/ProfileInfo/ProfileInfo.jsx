import React from "react";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://x6w8x9r7.rocketcdn.me/wp-content/uploads/Hacking-optimised.jpg" />
      </div>

      <div className={s.description}>
        <div>{props.profile.fullName}</div>
        <img src={props.profile.photos.large} alt="" />
      </div>
    </div>
  );
};
export default ProfileInfo;
