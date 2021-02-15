import { ProfileAPI, UserAPI } from "../API/api";

let initialState = {
  posts: [
    { id: 1, message: "How are you?", like: 12 },
    { id: 2, message: "It`s my first project", like: 48 },
    { id: 3, message: "OH.My Hacker?", like: 12 },
  ],
  newPostText: "YegorScript",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: " ",
      };
    case "UPDATE-NEW-POST-TEXT":
      return { ...state, newPostText: action.newText };
    case "SET-USER-PROFILE":
      return { ...state, profile: action.profile };
    case "SET-STATUS":
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const ADD_POST_ACTION_CREATE = () => ({
  type: "ADD-POST",
});
export const UPDATE_NEW_POST_TEXT_ACTION_CREATE = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});
export const SET_USER_PROFILE = (profile) => ({
  type: "SET-USER-PROFILE",
  profile,
});
export const SET_STATUS = (status) => ({
  type: "SET-STATUS",
  status,
});
export const getProfile = (userId) => (dispatch) => {
  UserAPI.getProfileContainer(userId).then((data) => {
    dispatch(SET_USER_PROFILE(data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then((data) => {
    dispatch(SET_STATUS(data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(SET_STATUS(status));
    }
  });
};
export default profileReducer;
