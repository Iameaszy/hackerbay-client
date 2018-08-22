import { configure } from '@storybook/react';

const req = require.context('../stories', true, /.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
//import jsdom from "jsdom";

Enzyme.configure({ adapter: new Adapter() });
configure(loadStories, module);
