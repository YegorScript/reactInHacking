const dialogsReducer = (state, action) => {
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
