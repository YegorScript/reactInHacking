import React from "react";
import {
  SEND_MESSAGE,
  UPDATE_NEW_MESSAGE_TEXT,
} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(SEND_MESSAGE());
  };
  let onNewMassegeChange = (body) => {
    props.store.dispatch(UPDATE_NEW_MESSAGE_TEXT(body));
  };
  return (
    <Dialogs
      UPDATE_NEW_MESSAGE_TEXT={onNewMassegeChange}
      SEND_MESSAGE={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
