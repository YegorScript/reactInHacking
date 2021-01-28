let initialState = {
  users: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW-":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UN-FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET-USERS":
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};
export const FOLLOW = (usersId) => ({ type: "FOLLOW-", usersId });
export const UN_FOLLOW = (usersId) => ({ type: "UN-FOLLOW", usersId });
export const SET_USERS = (users) => ({ type: "SET-USERS", users });

export default usersReducer;
