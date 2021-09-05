import img from "../images/post.jpg";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, what's up!", count_likes: 15 },
        { id: 2, message: "It's my social network", count_likes: 21 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    friendsSection: {
      friends: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Boris" },
        { id: 3, name: "Lizy" },
      ],
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsSection = friendsReducer(
      this._state.friendsSection,
      action
    );

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
