let initialState = {
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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT":
      state.newMessageBody = action.body;
      return state;
    case "SEND-MESSAGE":
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.message.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};
export const SEND_MESSAGE = () => ({
  type: "SEND-MESSAGE",
});
export const UPDATE_NEW_MESSAGE_TEXT = (body) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  body: body,
});
export default dialogsReducer;
