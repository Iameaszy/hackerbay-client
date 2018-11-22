import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { SharedStyle } from '../../components/styles/shared';
import { loginRequest, loginFailure } from '../../redux/actions';
import loader from '../../assets/icons/index.messenger-typing-preloader.svg';
import Form from '../../components/form/form';

import './login.css';

function Login(props) {
  return (
    <SharedStyle className="Login">
      <h3>Login Form</h3>
      <Form {...props} text={'Login'} />
    </SharedStyle>
  );
}
let LogInForm = reduxForm({
  form: 'login',
})(Login);

const mapStatesWithProps = (states) => {
  return {
    loading: states.login.loading,
    failure: states.login.failure,
    success: states.login.success,
    loader,
  };
};

const mapDispatchWithProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(loginRequest(values));
    },
    dismiss: () => dispatch(loginFailure(false)),
  };
};

export default connect(
  mapStatesWithProps,
  mapDispatchWithProps,
)(LogInForm);
