import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_TEACHER_FAILURE,
  LOGIN_TEACHER_SUCCESS,
  LOGIN_TEACHER_REQUEST
} from "./actionTypes";
import axios from "../../utils/axiosInterceptor";

export const loginUserRequest = payload => ({
  type: LOGIN_USER_REQUEST,
  payload
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFail = () => ({
  type: LOGIN_USER_FAIL
});

export const loginUser = payload => {
  return dispatch => {
    dispatch(loginUserRequest());
    return axios
      .post("/admin_login", {
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        localStorage.setItem("quizera_auth_token", res.token);
        dispatch(loginUserSuccess(res));
      })
      .catch(() => dispatch(loginUserFail()));
  };
};

export const loginTeacherRequest = payload => ({
  type: LOGIN_TEACHER_REQUEST,
  payload
});

export const loginTeacherSuccess = payload => ({
  type: LOGIN_TEACHER_SUCCESS,
  payload
});

export const loginTeacherFail = () => ({
  type: LOGIN_TEACHER_FAILURE
});

export const loginTeacher = payload => {
  return dispatch => {
    dispatch(loginTeacherRequest());
    return axios
      .post("/teachers/login", {
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        localStorage.setItem("quizera_auth_token", res.token);
        dispatch(loginTeacherSuccess(res));
      })
      .catch(() => dispatch(loginTeacherFail()));
  };
};

export const registerUserRequest = payload => ({
  type: LOGIN_TEACHER_REQUEST,
  payload
});

export const registerUserSuccess = payload => ({
  type: LOGIN_TEACHER_SUCCESS,
  payload
});

export const registerUserFailure = () => ({
  type: LOGIN_TEACHER_FAILURE
});

export const registerUser = payload => {
  /*
  payload: {
    email,
    password,
    userType (student|teacher)
  }
  */
  return dispatch => {
    dispatch(registerUserRequest());
    return axios
      .post(`/${payload.userType}/login`, {
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        dispatch(registerUserSuccess(res));
      })
      .catch(() => dispatch(registerUserFailure()));
  };
};
