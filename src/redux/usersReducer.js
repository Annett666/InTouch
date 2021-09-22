import { traverseTwoPhase } from "react-dom/test-utils";

const SET_USERS = "SET_USERS";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";

let initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});

export const followUserActionCreator = (userId) => ({
  type: FOLLOW_USER,
  userId,
});

export const unfollowUserActionCreator = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});

export default usersReducer;
