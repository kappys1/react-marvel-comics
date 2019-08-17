import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import WaitingComponent from '.';
import SearchBar from '../SearchBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Element = WaitingComponent(SearchBar);
  ReactDOM.render(
    <>
      <Suspense fallback={<>Loading...</>}>{<Element></Element>}</Suspense>
    </>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
