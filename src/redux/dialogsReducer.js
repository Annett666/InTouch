import img from "../assets/images/post.jpg";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Anna" },
    { id: 2, name: "Ksysha" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Artyom" },
    { id: 5, name: "Nikita" },
    { id: 6, name: "Mariya" },
  ],
  messages: [
    { id: 1, message: "Hi!", img: { img } },
    { id: 2, message: "What's up?" },
    { id: 3, message: "Good! I learn react" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let myMessage = {
        id: 6,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, myMessage],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.messageText,
      };
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageText: message,
});

export default dialogsReducer;
