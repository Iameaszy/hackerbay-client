import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOADING
} from "../actions";
import {
  combineReducers
} from "redux";


function loading(state=false,action){
    switch(action.type){
      case LOADING: return action.state;
      default: return state;
    }
}
function success(state='', action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return action.payload
    default:
      return state;
  }
}

function failure(state = '', action) {
  switch (action.type) {
    case REGISTER_FAILURE:
      return action.error
    default:
      return state;
  }
}

const reducers = combineReducers({
  failure,
  success,
  loading
});

export default reducers;