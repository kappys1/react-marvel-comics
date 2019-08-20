import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages/Home';
import * as serviceWorker from './sw/serviceWorker';
import configureStore, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Home history={history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
// If you want your Home to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
