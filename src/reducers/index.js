import {
  combineReducers
} from 'redux';
import {
  reducer as formReducer
} from 'redux-form';

// calling the default reducer to create a link
import signUpReducer from './signupform-reducer';
import loginReducer from './login-reducer';
const rootReducers = combineReducers({
  // add reducer files references here
  form: formReducer,
  signup: signUpReducer,
  login:loginReducer
});

export default rootReducers;