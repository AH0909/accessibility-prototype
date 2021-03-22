import React from 'react';
import Table from './index.js';
import ReactDOM from 'react-dom';

it('renders a table component', () => {
  const div = document.createElement('Table');
  ReactDOM.render(<Table />, div);
});
