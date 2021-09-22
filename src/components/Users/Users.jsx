import Friend from "../Friend/Friend";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        avatar:
          "https://usergenerator.canekzapata.net/2e4566fd829bcf9eb11ccdb5f252b02f.jpeg",
        fullName: "Anna M.",
        status: "Hi bitch",
        location: {
          country: "Belarus",
          city: "Grodno",
        },
      },
      {
        id: 2,
        followed: true,
        avatar:
          "https://usergenerator.canekzapata.net/2e4566fd829bcf9eb11ccdb5f252b02f.jpeg",
        fullName: "Lesua M.",
        status: "Hi bitch",
        location: {
          country: "Russia",
          city: "Moscow",
        },
      },
      {
        id: 3,
        followed: false,
        avatar:
          "https://usergenerator.canekzapata.net/2e4566fd829bcf9eb11ccdb5f252b02f.jpeg",
        fullName: "Sasha M.",
        status: "Hi bitch",
        location: {
          country: "Ukraine",
          city: "Kiev",
        },
      },
    ]);
  }

  return props.users.map((user) => (
    <div key={user.id}>
      <span>
        <div>
          <img className={styles.userPhoto} src={user.avatar} alt="#" />
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
          <div>{user.fullName}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{user.location.country}</div>
          <div>{user.location.city}</div>
        </span>
      </span>
    </div>
  ));
};

export default Users;
