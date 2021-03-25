import React from 'react';
import WithColourPicker from './index.js';
import ReactDOM from 'react-dom';

it('renders colour picker', () => {
  const div = document.createElement('WithColourPicker');
  ReactDOM.render(<WithColourPicker />, div);
});
