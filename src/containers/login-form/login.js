import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import login, { failure } from '../../actions/login';
import loader from '../../icons/index.messenger-typing-preloader.svg';
import Form from '../../components/form/form';

import './login.css';

const logintyle = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

function Login(props) {
  const { display } = props;
  const style = {
    position: 'absolute',
    display: display || 'block',
    top: '4rem',
    width: '60%',
    padding: '0.5rem',
    textAlign: 'center',
    color: 'white',
    borderRadius: '10px',
    background: 'linear-gradient(to right, blue,green',
  };

  return (
    <section className="Login" style={logintyle}>
      <h3 style={style}>Login Form</h3>
      <Form {...props} />
    </section>
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
      dispatch(login(values));
    },
    dismiss: () => dispatch(failure(false)),
  };
};

export default connect(
  mapStatesWithProps,
  mapDispatchWithProps,
)(LogInForm);
