import { IS_REGISTER } from "../actions/field-shield";

export default function(state = false, action) {
  switch (action.type) {
    case IS_REGISTER:
      return action.state;
    default:
      return false;
  }
}
