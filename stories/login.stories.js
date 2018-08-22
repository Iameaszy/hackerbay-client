import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import store from '../src';
import { Provider } from 'react-redux';
import Login from '../src/containers/login-form/login';
import { withKnobs, text, object } from '@storybook/addon-knobs';

let stories = storiesOf('Login', module);

stories.addDecorator(withKnobs);
stories.addDecorator((story) => (
  <Provider store={store}>
    <div>{story()}</div>
  </Provider>
));

stories.add('index', () => {
  return <Login display={'none'} />;
});
