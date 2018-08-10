import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOADING = "LOADING";

export function loading(state = false) {
  return {
    type: LOADING,
    state,
  };
}
export function success(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function failure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export default function login(data) {
  return function(dispatch) {
    dispatch(loading(true));

    axios
      .post("http://localhost:3000/user/login", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(loading(false));
        if (res.status >= 200 && res.status < 400) {
          dispatch(success(JSON.stringify(res.data.session)));
        } else {
          dispatch(failure(res.data.error));
        }
      })
      .catch((err) => {
        dispatch(loading(false));
        dispatch(failure(err.message));
      });
  };
}
