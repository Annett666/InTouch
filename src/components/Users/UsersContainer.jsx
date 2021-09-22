import Users from "./Users";
import { connect } from "react-redux";
import {
  setUsersActionCreator,
  followUserActionCreator,
  unfollowUserActionCreator,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
