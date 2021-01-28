import axios from "axios";
import React from "react";
import usersIcon from "../../assets/images/users.jpg";
let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.SET_USERS(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>getUsers</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : usersIcon} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.UN_FOLLOW(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.FOLLOW(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
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
