import axios from "axios";
import Friend from "../Friend/Friend";
import styles from "./Users.module.css";
import defaultUserPhoto from "../../assets/images/default_user.jpeg";
import User from "./User/User";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        let users = response.data;
        props.setUsers(users.items);
      });
  }

  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <span>
            <div>
              <img
                className={styles.userPhoto}
                src={
                  user.photos.small !== null
                    ? user.photos.small
                    : defaultUserPhoto
                }
                alt="#"
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollowUser(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.followUser(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"Belarus"}</div>
              <div>{"Grodno"}</div>
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Users;
