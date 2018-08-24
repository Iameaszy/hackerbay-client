import React from 'react';
import thunkMiddleware from 'redux-thunk';
import ReactDOM from 'react-dom';
import './index.css';
/* Components */
import App from './App';
import Home from './containers/home/home';

import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import {
  connectRouter,
  ConnectedRouter,
  routerMiddleware,
} from 'connected-react-router';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { rootReducers } from './reducers';
import ReduxPromise from 'redux-promise';

const history = createBrowserHistory();
export const store = createStore(
  connectRouter(history)(rootReducers),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      logger,
      ReduxPromise,
    ),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registration" component={App} />
        </Switch>
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
