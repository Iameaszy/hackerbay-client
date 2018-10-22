// To test the entire component (integration tests), we're going to use Enzyme's `mount` method,
// which is the opposite of shallow rendering. To use `mount`, we need to have a DOM, so we use
// jsdom. You can alternatively run these tests in a browser to get a DOM, but that's more
// complicated to set up and usually slower.
// This setup needs to happen before React is loaded. See: http://stackoverflow.com/a/32996395/135101.
import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';
import initStoryshots from '@storybook/addon-storyshots';
import Enzyme from 'enzyme';
import jsdom from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });

//global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global;
global.navigator = window.navigator;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};

initStoryshots();
/*
 "jest": {
    "moduleNameMapper": {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "setupTestFrameworkScriptFile": "<rootDir>/setupTests.js",
    "collectCoverage": true,
    "coverageReporters": [
      "json",
      "html"
    ]
  }
  */
