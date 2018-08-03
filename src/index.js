import React from "react";
import thunkMiddleware from "redux-thunk";
import ReactDOM from "react-dom";
import "./index.css";
/* Components */
import App from "./App";
import { Home } from "./components/home/home";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, logger, ReduxPromise),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/home" component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
export default store;
