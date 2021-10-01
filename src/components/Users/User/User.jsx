import axios from "axios";
import styles from "./User.module.css";
import defaultUserPhoto from "../../../assets/images/default_user.jpeg";

const User = (props, user) => {
  // if (props.users.length === 0) {
  //   axios
  //     .get("https://social-network.samuraijs.com/api/1.0/users")
  //     .then((response) => {
  //       props.setUsers(response.data.items);
  //     });
  // }
  //   // props.setUsers([
  //   //   {
  //   //     id: 1,
  //   //     followed: false,
  //   //     avatar:
  //   //       "https://usergenerator.canekzapata.net/2e4566fd829bcf9eb11ccdb5f252b02f.jpeg",
  //   //     fullName: "Anna M.",
  //   //     status: "Hi bitch",
  //   //     location: {
  //   //       country: "Belarus",
  //   //       city: "Grodno",
  //   //     },
  //   //   },
  //   //   // {
  //   //   //   id: 2,
  //   //   //   followed: true,
  //   //   //   avatar:
  //   //   //     "https://usergenerator.canekzapata.net/2e4566fd829bcf9eb11ccdb5f252b02f.jpeg",
  //   //   //   fullName: "Lesua M.",
  //   //   //   status: "Hi bitch",
  //   //   //   location: {
  //   //   //     country: "Russia",
  //   //   //     city: "Moscow",
  //   //   //   },
  //   //   // },
  //   //   // {
  //   //   //   id: 3,
  //   //   //   followed: false,
  //   //   //   avatar:
  //   //   //     "https://usergenerator.canekzapata.net/2e4566fd829bcf9eb11ccdb5f252b02f.jpeg",
  //   //   //   fullName: "Sasha M.",
  //   //   //   status: "Hi bitch",
  //   //   //   location: {
  //   //   //     country: "Ukraine",
  //   //   //     city: "Kiev",
  //   //   //   },
  //   //   // },
  //   // ]);
  // }
  return (
    <li key={user.id}>
      <span>
        <div>
          <img
            className={styles.userPhoto}
            src={
              user.photos.small !== null ? user.photos.small : defaultUserPhoto
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
  );
};

export default User;
