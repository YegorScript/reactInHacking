let renderEntireTree = () => {};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "How are you?", like: 12 },
      { id: 2, message: "It`s my first project", like: 48 },
      { id: 3, message: "OH.My Hacker?", like: 12 },
    ],
    newPostText: "YegorScript",
  },
  dialogsPage: {
    message: [
      { id: 1, message: "hello" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Hacker?" },
      { id: 5, message: "Hi,Hacker" },
    ],
    dialogs: [
      { id: 1, name: "Егор" },
      { id: 2, name: "Ксения" },
      { id: 3, name: "Дмитрий" },
      { id: 4, name: "Тимур" },
      { id: 5, name: "Эрик" },
    ],
  },
};
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = " ";
  renderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};
export const subscribe = (observer) => {
  renderEntireTree = observer;
};
export default state;
