import React from 'react';
import { reduxForm, Field } from 'redux-form';

import makeRequest from '../actions';
import { connect } from 'react-redux';

//validations
const required = (value) => (value ? undefined : 'Required');
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'invalid email address'
    : undefined;
const minLength8 = (value) =>
  value && value.length >= 8
    ? undefined
    : 'password must be atleast eight (8) long';


function LogInForm(props) {
  const { pristine, submitting, handleSubmit, invalid, loading,failure,success} = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
    <div className="login-title">Login Form</div>
        {loading &&
          <p className='loading'>
          <svg class="lds-message" width="80px"  height="80px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(20 50)">
<circle cx="0" cy="0" r="7" fill="#e15b64" transform="scale(0.99275 0.99275)">
  <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(40 50)">
<circle cx="0" cy="0" r="7" fill="#f47e60" transform="scale(0.773605 0.773605)">
  <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(60 50)">
<circle cx="0" cy="0" r="7" fill="#f8b26a" transform="scale(0.42525 0.42525)">
  <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(80 50)">
<circle cx="0" cy="0" r="7" fill="#abbd81" transform="scale(0.113418 0.113418)">
  <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
</circle>
</g></svg>
          </p>
        }
        {   failure && 
          <p className="server-error">{failure}</p>
        }
        <Field
          className="input"
          name="email"
          component={renderField}
          type="email"
          label="Email"
          placeholder="@"
          validate={[required, email]}
        />

        <Field
          className="input"
          name="password"
          component={renderField}
          type="password"
          label="Password"
          placeholder=""
          validate={[minLength8]}
        />

      <div className="field">
        <div className="control">
          <button
          type="submit"
            disabled={pristine || submitting || invalid}
            className="button is-link"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field">
    <label className="label">{label}:</label>
    <div className="control-container">
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched && (error && <p className="error">{error}</p>)}
  </div>
);
LogInForm = reduxForm({
  form: 'signup',
})(LogInForm);

const mapStatesWithProps = states =>{
  return {
    loading:states.login.loading,
    failure:states.login.failure,
    success:states.login.success
  }
}
const mapDispatchWithProps = dispatch=>{
  return {
    onSubmit:(values)=>{dispatch(makeRequest(values))}
 }
}

export default connect(
  mapStatesWithProps,
  mapDispatchWithProps
)(LogInForm);