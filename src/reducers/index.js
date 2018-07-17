import {
  combineReducers
} from 'redux';
import {
  reducer as formReducer
} from 'redux-form';

// calling the default reducer to create a link
import signUpReducer from './signupform-reducer';
const rootReducers = combineReducers({
  // add reducer files references here
  form: formReducer,
  signup: signUpReducer,
});

export default rootReducers;