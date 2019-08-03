import React from 'react';
import ReactDOM from 'react-dom';
import ItemComic from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemComic />, div);
  ReactDOM.unmountComponentAtNode(div);
});
