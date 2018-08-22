import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/login');
  require('../stories/signinform');
  require('../stories/home');
}

configure(loadStories, module);
