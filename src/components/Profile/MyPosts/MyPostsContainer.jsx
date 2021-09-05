import { updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { addPostActionCreator } from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPostOnPage = () => {
          store.dispatch(addPostActionCreator());
        };

        let changePost = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={changePost}
            addPost={addPostOnPage}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
