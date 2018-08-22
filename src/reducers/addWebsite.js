import { ADD_SUCCESS, ADD_FAILURE, LOADING } from '../actions/addWebsite';
import { combineReducers } from 'redux';

function loading(state = false, action) {
  switch (action.type) {
    case LOADING:
      return action.state;
    default:
      return state;
  }
}

function success(state = false, action) {
  switch (action.type) {
    case ADD_SUCCESS:
      return action.state;
    default:
      return state;
  }
}

function failure(state = '', action) {
  switch (action.type) {
    case ADD_FAILURE:
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
