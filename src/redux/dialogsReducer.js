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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND-MESSAGE":
      let body = action.newMessageBody;
      return {
        ...state,
        message: [...state.message, { id: 6, message: body }],
      };

    default:
      return state;
  }
};
export const SEND_MESSAGE = (newMessageBody) => ({
  type: "SEND-MESSAGE",
  newMessageBody,
});
export default dialogsReducer;
