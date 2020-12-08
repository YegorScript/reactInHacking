import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://x6w8x9r7.rocketcdn.me/wp-content/uploads/Hacking-optimised.jpg" />
      </div>
      <div className={s.discription}>ava description</div>
    </div>
  );
};
export default ProfileInfo;
