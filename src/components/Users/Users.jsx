import React from "react";
import axios from "axios";
import Friend from "../Friend/Friend";
import styles from "./Users.module.css";
import defaultUserPhoto from "../../assets/images/default_user.jpeg";
import User from "./User/User";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        let users = response.data;
        this.props.setUsers(users.items);
        this.props.setTotalUsersCount(users.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        let users = response.data;
        this.props.setUsers(users.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={() => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
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
                      this.props.unfollowUser(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.followUser(user.id);
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
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
