import React from 'react';
import ReactDOM from 'react-dom';
import ItemSearchComic from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemSearchComic />, div);
  ReactDOM.unmountComponentAtNode(div);
});
