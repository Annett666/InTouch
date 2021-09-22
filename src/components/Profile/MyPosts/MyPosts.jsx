import { createRef } from "react";
import k from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // let state = props.store.getState().profilePage;

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} count_likes={p.count_likes} />
  ));

  let newPostElement = createRef();

  let addPostOnPage = () => {
    props.addPost();
  };

  // let newText = state.newText;

  let changePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={k.postsBlock}>
      <h3>My posts</h3>
      <div>
        {/* New post */}
        <div>
          <textarea
            onChange={changePost}
            ref={newPostElement}
            value={props.newPostText}
            placeholder="What's new?"
          />
        </div>
        <div>
          <button onClick={addPostOnPage}>Add Post</button>
        </div>
      </div>
      <div>
        <div className={k.item}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
