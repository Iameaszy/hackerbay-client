import axios from 'axios';

export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const LOADING = 'LOADING';

export function addWebsiteLoading(state = false) {
  return {
    type: LOADING,
    state,
  };
}
export function addWebsiteSuccess(data) {
  return {
    type: ADD_SUCCESS,
    data,
  };
}

export function addWebsiteFailure(error) {
  return {
    type: ADD_FAILURE,
    error,
  };
}

export default function addWebsiteRequest(data) {
  return function(dispatch) {
    dispatch(addWebsiteLoading(true));
    const token = JSON.parse(localStorage.getItem('token'));
    axios
      .post('http://localhost:3000/website', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(addWebsiteLoading(false));
        if (res.status >= 200 && res.status < 400) {
          dispatch(addWebsiteSuccess(res.data));
        } else {
          dispatch(addWebsiteFailure(res.data.error));
        }
      })
      .catch((err) => {
        dispatch(addWebsiteLoading(false));
        dispatch(addWebsiteFailure(err.response.data.error));
      });
  };
}
