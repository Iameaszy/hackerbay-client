import fetch from 'isomorphic-fetch';


export const POST = "POST";
export const IS_SUCCESS = "IS_SUCCESS"
export const IS_FAILURE = "IS_FAILURE"
export const LOADING = "LOADING";


export function loading(state = false) {
  return {
    type: LOADING,
    state
  }
}
export function success(payload) {
  return {
    type: IS_SUCCESS,
    payload
  }
}

export function failure(error) {
  return {
    type: IS_FAILURE,
    error
  }
}

export default function makeRequest() {
  return function (dispatch) {
    dispatch(loading(true));

    fetch('http://localhost:3000')
      .then(res => {
        dispatch(loading(false));
        console.log(res);
        dispatch(success(JSON.stringify(res)));
      }, err => {
        console.log('An error occured:', err);
        dispatch(loading(false));
        dispatch(failure(err.message));
      });
  }
}