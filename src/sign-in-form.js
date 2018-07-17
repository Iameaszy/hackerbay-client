import React from 'react';
import { reduxForm, Field } from 'redux-form';

import './sign-in-form.css';
import makeRequest from './actions';
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


function SignInForm(props) {
  const { pristine, submitting, handleSubmit, invalid, loading,failure,success } = props;
  console.log(props);
  return (
    <form className="form" onSubmit={handleSubmit}>
        {loading &&
          <p class='loading'>loading....</p>
        }
        {   failure && 
          <p class="server-error">{failure}</p>
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
SignInForm = reduxForm({
  form: 'signup',
})(SignInForm);

const mapStatesWithProps = states =>{
  return {
    loading:states.signup.loading,
    failure:states.signup.failure,
    success:states.signup.success
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
)(SignInForm);