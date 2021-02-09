import React from "react";
import { NavLink } from "react-router-dom";
import usersIcon from "../../assets/images/users.jpg";
import s from "./Users.module.css";
import { UserAPI } from "../../API/api";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.boy}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              key={p}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small != null ? u.photos.small : usersIcon} />
            </NavLink>
          </div>
          <div>
            {u.followed ? (
              <button
                disabled={props.followingIsProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.TOGGLE_IS_FOLLOWING(true, u.id);
                  UserAPI.UnFollowUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.UN_FOLLOW(u.id);
                    }
                    props.TOGGLE_IS_FOLLOWING(false, u.id);
                  });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingIsProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.TOGGLE_IS_FOLLOWING(true, u.id);

                  UserAPI.followUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.FOLLOW(u.id);
                    }
                    props.TOGGLE_IS_FOLLOWING(false, u.id);
                  });
                }}
              >
                Follow
              </button>
            )}
          </div>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
