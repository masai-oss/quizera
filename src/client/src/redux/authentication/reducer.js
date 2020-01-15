import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  LOGIN_TEACHER_REQUEST,
  LOGIN_TEACHER_SUCCESS,
  LOGIN_TEACHER_FAILURE,
  LOGOUT_TEACHER,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "./actionTypes";

const initState = {
  isAuth: false,
  authWait: false,
  error: "",
  language: "en",
  token: "",
  type: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { ...state, authWait: true, error: "" };

    case LOGIN_USER_SUCCESS:
      return {
        isAuth: true,
        authWait: false,
        language: action.payload.language,
        type: "student"
      };

    case LOGIN_USER_FAIL:
      return { ...state, authWait: false, error: "Login failed" };

    case LOGOUT_USER:
      return { isAuth: false, type: "", token: "" };

    case LOGIN_TEACHER_REQUEST:
      return { ...state, authWait: true, error: "" };

    case LOGIN_TEACHER_SUCCESS:
      return {
        isAuth: true,
        authWait: false,
        language: action.payload.language,
        type: "teacher"
      };

    case LOGIN_TEACHER_FAILURE:
      return { ...state, authWait: false, error: "Login failed" };

    case LOGOUT_TEACHER:
      return { isAuth: false, type: "", token: "" };

    case REGISTER_USER_REQUEST:
      return { ...state, authWait: true };

    case REGISTER_USER_SUCCESS:
      return {
        isAuth: true,
        authWait: false,
        language: action.payload.language,
        type: "teacher",
        error: ""
      };

    case REGISTER_USER_FAILURE:
      return { ...state, error: "Registration failed" };

    default:
      return state;
  }
};
export default reducer;
