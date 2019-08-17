import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '.';
import configureStore, { history } from '../../store';
import { Provider } from 'react-redux';
const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Carousel history={history} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
