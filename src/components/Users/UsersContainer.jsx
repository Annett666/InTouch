import React from "react";
import { connect } from "react-redux";
import {
  setUsersActionCreator,
  followUserActionCreator,
  unfollowUserActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  setIsFetchingActionCreator,
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        let users = response.data;
        this.props.setUsers(users.items);
        this.props.setTotalUsersCount(users.totalCount);
        this.props.setIsFetching(false);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        let users = response.data;
        this.props.setUsers(users.items);
        this.props.setIsFetching(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
        />
      </>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    followUser: (userId) => {
      dispatch(followUserActionCreator(userId));
    },
    unfollowUser: (userId) => {
      dispatch(unfollowUserActionCreator(userId));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountActionCreator(totalCount));
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingActionCreator(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
