import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Massage/Message";
import {
  SEND_MESSAGE,
  UPDATE_NEW_MESSAGE_TEXT,
} from "../../redux/dialogsReduser";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((p) => (
    <Dialog name={p.name} id={p.id} />
  ));
  let messagesElement = props.state.message.map((m) => (
    <Message message={m.message} />
  ));
  let onSendMessageClic = () => {
    props.dispatch(SEND_MESSAGE());
  };
  let onNewMassegeChange = (e) => {
    let body = e.target.value;
    props.dispatch(UPDATE_NEW_MESSAGE_TEXT(body));
  };
  return (
    <div className={s.dialogsAll}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messages}>
        {messagesElement}
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              onChange={onNewMassegeChange}
              value={props.state.newMessageBody}
            ></textarea>
            <span>
              <button onClick={onSendMessageClic}>отправить</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
