import React from 'react';
import Contact from './index.js';
import ReactDOM from 'react-dom';

it('renders contact button', () => {
  const div = document.createElement('Contact');
  ReactDOM.render(<Contact />, div);
});
