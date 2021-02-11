import { UserAPI } from "../API/api";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};
export const SET_USER_DATA = (userId, email, login) => ({
  type: "SET-USER-DATA",
  data: { userId, email, login },
});

export const authLogin = () => {
  return (dispatch) => {
    UserAPI.Login().then((data) => {
      if (data.resultCode === 0) {
        let { Id, email, login } = data.data;
        dispatch(SET_USER_DATA(Id, email, login));
      }
    });
  };
};
export default authReducer;
