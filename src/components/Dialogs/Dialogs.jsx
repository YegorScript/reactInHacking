import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Massage/Message";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((p) => (
    <Dialog name={p.name} id={p.id} />
  ));
  let messagesElement = props.state.message.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };
  return (
    <div className={s.dialogsAll}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messages}>
        {messagesElement}
        <div>
          <div>
            <textarea ref={newMessageElement}></textarea>
            <span>
              <button onClick={addMessage}>отправить</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
