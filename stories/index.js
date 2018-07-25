import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SignInForm from "../src/components/sign-in-form";
import { Button } from "../src/components/button";
import store from "../src/index";
import { Provider } from "react-redux";

let stories = storiesOf("Register form", module);
stories.addDecorator(getStory => {
  return (
    <Provider store={store}>
      <div>{getStory()}</div>
    </Provider>
  );
});

stories.add("with disabled button", () => {
  return <SignInForm handleSubmit={action("hello")} />;
});
