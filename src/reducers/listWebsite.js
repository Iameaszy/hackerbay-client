import { LOGIN_SUCCESS, LOGIN_FAILURE, LOADING } from '../actions/listWebsites';
import { combineReducers } from 'redux';

function loading(state = false, action) {
  switch (action.type) {
    case LOADING:
      return action.state;
    default:
      return state;
  }
}

function success(state = [], action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.data;
    default:
      return state;
  }
}

function failure(state = '', action) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return action.error;
    default:
      return state;
  }
}

const reducers = combineReducers({
  failure,
  success,
  loading,
});

export default reducers;
