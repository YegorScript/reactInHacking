import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import StatusProfileWithHooks from "./StatusProfileWithHooks";
import s from "./ProfileInfo.module.css";
import usersIcon from "../../../assets/images/users.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://x6w8x9r7.rocketcdn.me/wp-content/uploads/Hacking-optimised.jpg"
          alt=""
        />
      </div>

      <div className={s.description}>
        <div>{props.profile.fullName}</div>
        <img
          src={
            props.profile.photos.large !== null
              ? props.profile.photos.large
              : usersIcon
          }
          alt=""
        />
      </div>
      <StatusProfileWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};
export default ProfileInfo;
