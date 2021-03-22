import React from 'react';
import Toggle from './toggler.js';
import ReactDOM from 'react-dom';

it('renders a toggle', () => {
  const div = document.createElement('Toggle');
  ReactDOM.render(<Toggle />, div);
});
