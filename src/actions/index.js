import fetch from "isomorphic-fetch";
import axios from "axios";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOADING = "LOADING";

export function loading(state = false) {
  return {
    type: LOADING,
    state,
  };
}
export function success(payload) {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
}

export function failure(error) {
  return {
    type: REGISTER_FAILURE,
    error,
  };
}

export default function makeRequest(data) {
  return function(dispatch) {
    dispatch(loading(true));

    axios
      .post("http://localhost:3000/user/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => {
        dispatch(loading(false));
        if (res && res.status < 400) {
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
