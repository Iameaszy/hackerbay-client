import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SignInForm from '../src/components/sign-in-form';
import LogInForm from '../src/components/login';
import store from '../src/index';
import App from '../src/App';
import { Provider } from 'react-redux';

let stories = storiesOf('Register form', module);

stories.addDecorator((story) => (
  <Provider store={store}>
    <div>{story()}</div>
  </Provider>
));

stories.add('signin form', () => {
  return <SignInForm />;
});

stories.add('login form', () => {
  return <LogInForm />;
});

stories.add('both login and signin form', () => {
  return <App />;
});
