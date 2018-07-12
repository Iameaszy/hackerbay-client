import React from 'react';
import { reduxForm, Field } from 'redux-form';

import './sign-in-form.css';

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
  const { pristine, submitting, handleSubmit, invalid } = props;
  console.log(props);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <Field
          className="input"
          name="email"
          component={renderField}
          type="email"
          label="Email"
          placeholder="@"
          validate={[required, email]}
        />
      </div>

      <div className="field">
        <Field
          className="input"
          name="password"
          component={renderField}
          type="password"
          label="Password"
          placeholder=""
          validate={[minLength8]}
        />
      </div>

      <div className="field">
        <div className="control">
          <button
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
const validate = (values) => {
  const errors = {};
  console.log(values);
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="control">
    <label className="label">{label}</label>
    <div className="control-container">
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched && (error && <span className="error">{error}</span>)}
  </div>
);
export default reduxForm({
  form: 'signup',
})(SignInForm);
