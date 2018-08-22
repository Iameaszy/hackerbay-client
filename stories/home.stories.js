import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import store from '../src';
import { Provider } from 'react-redux';
import Home from '../src/App';
import { mount } from 'enzyme';
let stories = storiesOf('Registration form', module);

stories.addDecorator((story) => (
  <Provider store={store}>
    <div>{story()}</div>
  </Provider>
));

stories.add('ind', () => {
  return <Home />;
});
