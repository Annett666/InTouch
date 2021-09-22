import { createRef } from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} img={m.img} />
  ));

  let takeMessage = createRef();
  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onSendMessageChange = (e) => {
    let message = e.target.value;
    props.updateNewMessageTextActionCreator(message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <div>
        <div>
          <textarea
            onChange={onSendMessageChange}
            ref={takeMessage}
            value={newMessageText}
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
