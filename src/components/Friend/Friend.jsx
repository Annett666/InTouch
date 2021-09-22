import k from "./Friend.module.css";
import friend from "../../images/friend.jpg";

const Friend = (props) => {
  return (
    <div className={k.item}>
      {/* <img src={photo_user} alt='photo_user' /> */}
      <img src={friend} alt="friend" />
      <div>{props.name}</div>
    </div>
  );
};

export default Friend;
