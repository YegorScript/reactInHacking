const profileReducer = (state, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      state.posts.push(newPost);
      state.newPostText = " ";
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newText;
      return state;
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
export default profileReducer;
