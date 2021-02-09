let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingIsProgress: [],
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

    case "TOGGLE-IS-FETCHING":
      return { ...state, isFetching: action.isFetching };

    case "TOGGLE-IS-FOLLOWING":
      return {
        ...state,
        followingIsProgress: action.isFetching
          ? [...state.followingIsProgress, action.usersId]
          : state.followingIsProgress.filter((id) => id != action.usersId),
      };

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
export const TOGGLE_IS_FETCHING = (isFetching) => ({
  type: "TOGGLE-IS-FETCHING",
  isFetching,
});
export const TOGGLE_IS_FOLLOWING = (isFetching, usersId) => ({
  type: "TOGGLE-IS-FOLLOWING",
  isFetching,
  usersId,
});

export default usersReducer;
