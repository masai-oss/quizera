import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from "./actionTypes";

const initState = {
  isAuth: false,
  authWait: false,
  error: "",
  language: "en"
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { ...state, authWait: true };
    case LOGIN_USER_SUCCESS:
      return {
        isAuth: true,
        authWait: false,
        language: action.payload.language
      };
    case LOGIN_USER_FAIL:
      return { ...state, authWait: false };
    case LOGOUT_USER:
      return { isAuth: false };
    default:
      return state;
  }
};
export default reducer;
