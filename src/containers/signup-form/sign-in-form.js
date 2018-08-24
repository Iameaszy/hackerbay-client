import React from 'react';
import { reduxForm } from 'redux-form';
import { registerRequest, registerFailure } from '../../actions';
import { connect } from 'react-redux';
import loader from '../../icons/index.glowing-rotate-ring.svg';
import Form from '../../components/form/form';

const style = {
  position: 'absolute',
  top: '4rem',
  width: '60%',
  padding: '0.5rem',
  textAlign: 'center',
  color: 'white',
  borderRadius: '10px',
  background: 'linear-gradient(to right, blue,green',
};
const signinStyle = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};
function Signin(props) {
  return (
    <section className="Signin" style={signinStyle}>
      <h3 style={style}>Registration Form</h3>
      <Form {...props} />
    </section>
  );
}
let SignInForm = reduxForm({
  form: 'signup',
  onSubmit: submit,
})(Signin);
function submit(values, dispatch) {
  dispatch(registerFailure(''));
  dispatch(registerRequest(values));
}
const mapStatesWithProps = (states) => {
  return {
    loading: states.signup.loading,
    failure: states.signup.failure,
    success: states.signup.success,
    loader,
  };
};

const mapDispatchWithProps = (dispatch) => {
  return {
    dismiss: () => dispatch(registerFailure(false)),
  };
};
export default connect(
  mapStatesWithProps,
  mapDispatchWithProps,
)(SignInForm);
