// import k from "./FriendsSection.module.css";
import Friend from "./Friend/Friend";
import k from "../FriendsSection/FriendsSection.module.css";

const FriendsSection = (props) => {
  let friendsItems = props.state.friends.map((f) => <Friend name={f.name} />);

  return (
    <div classname={k.friendsBlock}>
      <div>
        <div className={k.item}>{friendsItems}</div>
      </div>
    </div>
  );
};

export default FriendsSection;
