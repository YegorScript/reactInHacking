import { authMe } from "./authReducer";

let initialState = {
  initialized: false,
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZED-SUCCESS":
      return { ...state, initialized: true };
    default:
      return state;
  }
};
export const INITIALIZED_SUCCESS = () => ({
  type: "INITIALIZED-SUCCESS",
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authMe());
  Promise.all([promise]).then(() => {
    dispatch(INITIALIZED_SUCCESS());
  });
};
export default appReducer;
