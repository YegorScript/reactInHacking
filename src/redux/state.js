let store = {
  _state: {
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
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     like: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = " ";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    //{type: ADD POST} , можно вызвать через
    //this._addPost()//this.updateNewPostText(newText)
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = " ";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
