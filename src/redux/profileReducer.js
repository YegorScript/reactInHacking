let initialState = {
  posts: [
    { id: 1, message: "How are you?", like: 12 },
    { id: 2, message: "It`s my first project", like: 48 },
    { id: 3, message: "OH.My Hacker?", like: 12 },
  ],
  newPostText: "YegorScript",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];

      stateCopy.posts.push(newPost);
      stateCopy.newPostText = " ";
      return stateCopy;
    }
    case "UPDATE-NEW-POST-TEXT": {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
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
