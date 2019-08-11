import React from 'react';
import ReactDOM from 'react-dom';
import Detail from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';
const store = configureStore();
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Detail />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
