import { traverseTwoPhase } from "react-dom/test-utils";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: "",
  login: "",
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export default authReducer;