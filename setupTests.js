// To test the entire component (integration tests), we're going to use Enzyme's `mount` method,
// which is the opposite of shallow rendering. To use `mount`, we need to have a DOM, so we use
// jsdom. You can alternatively run these tests in a browser to get a DOM, but that's more
// complicated to set up and usually slower.
// This setup needs to happen before React is loaded. See: http://stackoverflow.com/a/32996395/135101.
import "raf/polyfill";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
//import jsdom from "jsdom";

Enzyme.configure({ adapter: new Adapter() });
/*
global.document = jsdom("<!doctype html><html><body></body></html>");
global.window = document.defaultView;
global.navigator = window.navigator;
*/
