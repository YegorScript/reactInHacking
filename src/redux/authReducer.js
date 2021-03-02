import { stopSubmit } from "redux-form";
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
export const authMe = () => (dispatch) => {
  return authAPI.Me().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(SET_USER_DATA(id, email, login, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authMe());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};
export const logout = (email, password, rememberMe) => (dispatch) => {
  authAPI.logout(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(SET_USER_DATA(null, null, null, false));
    }
  });
};

export default authReducer;
