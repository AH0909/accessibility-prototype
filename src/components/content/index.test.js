import React from 'react';
import Content from './index.js';
import ReactDOM from 'react-dom';

it('renders content', () => {
  const div = document.createElement('Content');
  ReactDOM.render(<Content />, div);
});
