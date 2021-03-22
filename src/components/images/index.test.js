import React from 'react';
import W3Clogo from './index.js';
import ReactDOM from 'react-dom';

it('renders W3C logo', () => {
  const div = document.createElement('W3C');
  ReactDOM.render(<W3Clogo />, div);
});