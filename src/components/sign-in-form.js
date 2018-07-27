import React from "react";
import { reduxForm, Field } from "redux-form";

//import "./sign-in-form.css";
import makeRequest from "../actions";
import { connect } from "react-redux";

//validations
const required = (value) => (value ? undefined : "Required");
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "invalid email address"
    : undefined;
const minLength8 = (value) =>
  value && value.length >= 8
    ? undefined
    : "password must be atleast eight (8) long";

export function SignInForm(props) {
  const {
    pristine,
    submitting,
    handleSubmit,
    invalid,
    loading,
    failure,
    success,
  } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="submit-title">Register Form</div>
      {loading && (
        <p className="loading">
          <svg
            className="lds-glow-ring"
            width="80px"
            height="80px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <defs>
              <radialGradient
                id="glow-ring_0.cc1f3b02317e2"
                cx="0.5"
                cy="0.5"
                fx="0"
                fy="0"
                r="2">
                <stop offset="0%" stopColor="#ffffcb" />
                <stop offset="100%" stopColor="#ff5c62" />
              </radialGradient>
            </defs>
            <g transform="rotate(234 50 50)">
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="#ffffcb"
                strokeWidth="12"
                fill="none"
                strokeOpacity="0.7"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="url(#glow-ring_0.cc1f3b02317e2)"
                strokeWidth="10"
                fill="none"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 50 50;360 50 50"
                times="0;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        </p>
      )}
      {failure && <p className="server-error">{failure}</p>}
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
            className="button is-link">
            Register
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
  form: "signup",
})(SignInForm);

const mapStatesWithProps = (states) => {
  return {
    loading: states.signup.loading,
    failure: states.signup.failure,
    success: states.signup.success,
  };
};
const mapDispatchWithProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(makeRequest(values));
    },
  };
};
export default connect(
  mapStatesWithProps,
  mapDispatchWithProps,
)(SignInForm);
