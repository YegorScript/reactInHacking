import React from "react";
debugger;
let Users = (props) => {
  if (!props.users.length === 0) {
    props.SET_USERS([
      {
        id: 1,
        followed: true,
        fullName: "Dmitri",
        status: "Good luck",
        location: { country: "Russia", city: "Moscow" },
      },
      {
        id: 2,
        followed: false,
        fullName: "Mark",
        status: "Hi,my friends",
        location: { country: "Ukraine", city: "Kiev" },
      },
      {
        id: 3,
        followed: true,
        fullName: "Ann",
        status: "Im the best",
        location: { country: "Kazakhstan", city: "Almaty" },
      },
      {
        id: 4,
        followed: false,
        fullName: "Yegor",
        status: "OOO, my GOD",
        location: { country: "Belarus", city: "Minsk" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src="#" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
