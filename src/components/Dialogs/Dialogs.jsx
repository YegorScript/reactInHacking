import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Massage/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((p) => (
    <Dialog name={p.name} id={p.id} key={p.id} />
  ));
  let messagesElement = state.message.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let onSendMessageClick = () => {
    props.SEND_MESSAGE();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.UPDATE_NEW_MESSAGE_TEXT(body);
  };
  if (!props.isAuth) return <Redirect to="login" />;
  return (
    <div className={s.dialogsAll}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messages}>
        {messagesElement}
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              onChange={onNewMessageChange}
              value={state.newMessageBody}
            ></textarea>
            <span>
              <button onClick={onSendMessageClick}>отправить</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
