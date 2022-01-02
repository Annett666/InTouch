import Users from "./Users";
import { connect } from "react-redux";
import {
  setUsersActionCreator,
  followUserActionCreator,
  unfollowUserActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
