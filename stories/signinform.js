import React from 'react';
import SignInForm from '../src/components/sign-in-form';
import MockAdapter from 'axios-mock-adapter';
import store from '../src/index';
import axios from 'axios';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Provider } from 'react-redux';
let stories = storiesOf('Register form', module);

stories.addDecorator((story) => (
  <Provider store={store}>
    <div>{story()}</div>
  </Provider>
));

stories.add('Blank sign in form', () => {
  return <SignInForm />;
});

stories.add('Completed sign in form', () => {
  const mock = new MockAdapter(axios);
  mock
    .restore()
    .onPost(`http://localhost:3000/user/signup`, { email: 'easyclick05Agmial' })
    .reply(401, 'user with this email already exist');
  return <SignInForm />;
});
