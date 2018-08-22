import axios from 'axios';

export const LOGIN_SUCCESS = 'LIST_SUCCESS';
export const LOGIN_FAILURE = 'LIST_FAILURE';
export const LOADING = 'LIST_LOADING';

export function listWebsiteLoading(state) {
  return {
    type: LOADING,
    state,
  };
}
export function listWebsiteSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
    fetched: data.length,
  };
}

export function listWebsiteFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export default function listWebsiteRequest(start) {
  return function(dispatch) {
    dispatch(listWebsiteLoading(true));
    const token = JSON.parse(localStorage.getItem('token'));
    axios
      .get(`http://localhost:3000/website/${start}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
        if(err.response){
        dispatch(listWebsiteFailure(err.response.data.error));
        }else{
          dispatch(listWebsiteFailure(err.message));
        }
      });
  };
}
