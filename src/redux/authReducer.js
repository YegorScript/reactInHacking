import { authAPI } from "../API/api";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return { ...state, ...action.data };
    default:
      return state;
  }
};
export const SET_USER_DATA = (userId, email, login, isAuth) => ({
  type: "SET-USER-DATA",
  data: { userId, email, login, isAuth },
});

export const authMe = () => {
  return (dispatch) => {
    authAPI.Me().then((data) => {
      if (data.resultCode === 0) {
        let { Id, email, login } = data.data;
        dispatch(SET_USER_DATA(Id, email, login, true));
      }
    });
  };
};
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(authMe());
      }
    });
  };
};
export const logout = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.logout(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(SET_USER_DATA(null, null, null, false));
      }
    });
  };
};
export default authReducer;
