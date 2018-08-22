import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOADING = 'LOADING';

export function listWebsiteLoading(state = false) {
  return {
    type: LOADING,
    state,
  };
}
export function listWebsiteSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function listWebsiteFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export default function listWebsiteRequest(data) {
  return function(dispatch) {
    dispatch(listWebsiteLoading(true));

    axios
      .post('http://localhost:3000/website', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        dispatch(listWebsiteLoading(false));
        if (res.status >= 200 && res.status < 400) {
          dispatch(listWebsiteSuccess(res.data));
        } else {
          dispatch(listWebsiteFailure(res.data.error));
        }
      })
      .catch((err) => {
        dispatch(listWebsiteLoading(false));
        dispatch(listWebsiteFailure(err.response.data.error));
      });
  };
}
