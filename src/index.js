import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

const store = configureStore();

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Home history={history} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
// If you want your Home to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
