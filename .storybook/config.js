import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  require('../stories/signinform');
  require('../stories/home');
}

configure(loadStories, module);
