import {
  FORM_SUBMIT_SUCCEEDED,
  FORM_SUBMIT_FAILED,
} from '../actions/signupform-action';

const initialState = new Map();
initialState.set('formHasError', false);
export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_SUBMIT_FAILED:
      return initialState.set('formHasErrors', true);
    case FORM_SUBMIT_SUCCEEDED:
      return initialState.set('formHasErrors', false);
    default:
      return state;
  }
};
