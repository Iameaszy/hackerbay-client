import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// calling the default reducer to create a link
import signUpReducer from './signupform-reducer';
import shieldReducer from './field-shield';
import loginReducer from './login-reducer';
import addWebsiteReducer from './addWebsite';
import listWebsitesReducer from './listWebsite';
const rootReducers = combineReducers({
  // add reducer files references here
  form: formReducer,
  signup: signUpReducer,
  login: loginReducer,
  shield: shieldReducer,
  addWebsite: addWebsiteReducer,
  listWebsites: listWebsitesReducer,
});

export default rootReducers;
