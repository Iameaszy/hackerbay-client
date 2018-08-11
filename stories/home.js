import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import store from '../src/index';
import { Provider } from 'react-redux';
import Home from '../src/components/home/home';

let stories = storiesOf('Home', module);

stories.addDecorator((story) => (
  <Provider store={store}>
    <div>{story()}</div>
  </Provider>
));

stories.add('index', () => {
  return <Home />;
});
