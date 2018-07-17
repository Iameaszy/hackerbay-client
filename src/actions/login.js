import fetch from 'isomorphic-fetch';


export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOADING = "LOADING";


export function loading(state = false) {
  return {
    type: LOADING,
    state
  }
}
export function success(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export function failure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export default function login(data) {
  return function (dispatch) {
    dispatch(loading(true));

    fetch('http://localhost:3000/user/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(async (res) => {
          let response = await res.json();
          return {
            status: res.status,
            data: response
          }
        },
        err => {
          dispatch(loading(false));
          dispatch(failure(err.message));
        }
      )
      .then(res => {
        dispatch(loading(false));
        if (res.status >= 200 && res.status < 400) {
          dispatch(success(JSON.stringify(res.data.session)));
        } else {
          dispatch(failure(res.data.error));
        }
      })
  }
}