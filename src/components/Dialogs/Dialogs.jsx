import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Message from "./Massage/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControl/FormsControl";
import { maxLengthCreator, required } from "../../validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((p) => (
    <Dialog name={p.name} id={p.id} key={p.id} />
  ));
  let messagesElement = state.message.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addNewMessage = (value) => {
    props.SEND_MESSAGE(value.newMessageBody);
  };
  return (
    <div className={s.dialogsAll}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messages}>
        {messagesElement}
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength100]}
        name={"newMessageBody"}
        placeholder="Enter your message"
      />
      <div>
        <button>отправить</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);
export default Dialogs;
