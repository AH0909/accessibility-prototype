import React from 'react';
import ReactDOM from 'react-dom';
import { IntroText } from './index.js';
import { SolutionText } from './index.js'
import { AccessibilityText } from './index.js'
import { VideoText } from './index.js'

it('renders Introduction text', () => {
  const div = document.createElement('IntroText');
  ReactDOM.render(<IntroText />, div);
});

it('renders Solution text', () => {
  const div = document.createElement('SolutionText');
  ReactDOM.render(<SolutionText />, div);
});

it('renders Accessibility text', () => {
  const div = document.createElement('AccessibilityText');
  ReactDOM.render(<AccessibilityText />, div);
});

it('renders Video text', () => {
  const div = document.createElement('VideoText');
  ReactDOM.render(<VideoText />, div);
});

