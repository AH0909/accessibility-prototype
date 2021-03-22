import React from 'react';
import List from './index.js';
import ReactDOM from 'react-dom';

it('renders a list', () => {
  const div = document.createElement('List');
  ReactDOM.render(<List />, div);
});
