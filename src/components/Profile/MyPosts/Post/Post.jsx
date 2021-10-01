import k from "./Post.module.css";
import photo_user from "../../../../assets/images/post.jpg";

const Post = (props) => {
  return (
    <div className={k.item}>
      <img src={photo_user} alt="photo_user" />
      {props.message}
      <div>
        <span>likes: </span>
        {props.count_likes}
      </div>
    </div>
  );
};

export default Post;
