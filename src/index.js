import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Home from './components/Home';

import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Link component={Home} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);