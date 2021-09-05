import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let onSendMessageChange = (message) => {
          store.dispatch(updateNewMessageTextActionCreator(message));
        };
        return (
          <Dialogs
            updateNewMessageTextActionCreator={onSendMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
