import React from 'react';
import ReactDOM from 'react-dom';
import Home from '.';
import configureStore, { history } from '../../store';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Home history={history} />
      </Router>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
