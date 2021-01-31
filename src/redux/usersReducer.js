let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
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
      return { ...state, users: action.users };
    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.currentPage };

    case "SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount };

    default:
      return state;
  }
};

export const FOLLOW = (usersId) => ({ type: "FOLLOW-", usersId });
export const UN_FOLLOW = (usersId) => ({ type: "UN-FOLLOW", usersId });
export const SET_USERS = (users) => ({ type: "SET-USERS", users });
export const SET_CURRENT_PAGE = (currentPage) => ({
  type: "SET-CURRENT-PAGE",
  currentPage,
});
export const SET_TOTAL_USERS_COUNT = (totalCount) => ({
  type: "SET-TOTAL-USERS-COUNT",
  totalUsersCount: totalCount,
});

export default usersReducer;
