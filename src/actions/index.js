import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOADING = 'LOADING';

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
      .post('http://localhost:3000/user/signup', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        dispatch(loading(false));
        if (res && res.status < 400) {
          dispatch(success(JSON.stringify(res.data.session)));
          return <Redirect to="/home" />;
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
