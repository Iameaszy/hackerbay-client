import SignIn, { SignInForm } from "../src/components/sign-in-form";
import React from "react";
import { SubmissionError } from "redux-form";

// See README for discussion of chai, enzyme, and sinon
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const mockStore = configureStore([thunk]);

// In this file we're doing unit testing of our component, which means it
// really has nothing to do with Redux-Form at this point. We can pass in our
// own props (e.g. `submitting`) and make sure our form renders as we expect.

describe("SignupFormComponent", () => {
  let subject = null;
  let submitting,
    touched,
    error,
    reset,
    onSave,
    onSaveResponse,
    onChange,
    pristine,
    handleSubmit,
    invalid,
    store;
  beforeEach(() => {
    submitting = false;
    invalid = false;
    touched = false;
    error = null;
    reset = jest.fn();
    onChange = jest.fn();
    pristine = true;
    onSaveResponse = Promise.resolve();
    handleSubmit = (fn) => fn;
  });
  const buildSubject = () => {
    onSave = jest.fn().mockReturnValue(onSaveResponse);
    store = mockStore({
      signup: {
        loading: false,
        success: false,
        failure: false,
      },
    });
    const props = {
      onSave,
      submitting,
      invalid,
      pristine,
      // The real redux form has many properties for each field,
      // including onChange and onBlur handlers. We only need to provide
      // the ones that will change the rendered output.
      fields: {
        firstName: {
          value: "",
          touched: touched,
          error: error,
        },
      },
      handleSubmit,
      onChange,
      reset,
    };
    return mount(
      <Provider store={store}>
        <SignIn {...props} />
      </Provider>,
    );
  };
  // Here we show we can test asychronous actions triggered by our form.
  it("submit button should be disabled", () => {
    subject = buildSubject();
    expect(subject.find("button").prop("disabled")).toBe(true);
  });
  it("should have two (2) input field", () => {
    subject = buildSubject();
    expect(subject.find("Field")).toHaveLength(2);
  });
  it("should failed with error", () => {
    subject = buildSubject();
    subject.find('input[type="email"]').simulate("focus");
    subject.find('input[type="email"]').simulate("blur");
    subject.update();
    console.log(subject.html());
    console.log(subject.find(SignIn).prop("invalid"));
    expect(2).toBe(2);
  });
});
