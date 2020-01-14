import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
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
    console.log(payload);
    return axios
      .post("/admin_login", {
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        console.log("success", res);
        localStorage.setItem("quizera_auth_token", res.token);
        dispatch(loginUserSuccess(res));
      })
      .catch(() => dispatch(loginUserFail()));
  };
};
