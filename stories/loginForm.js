import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LogInForm from '../src/components/login';
import store from '../src/index';
import App from '../src/App';
import { Provider } from 'react-redux';

let stories = storiesOf('Index page', module);

stories.addDecorator((story) => (
  <Provider store={store}>
    <div>{story()}</div>
  </Provider>
));

stories.add('login form', () => {
  return <LogInForm />;
});

stories.add('both login and signin form', () => {
  return <App />;
});
