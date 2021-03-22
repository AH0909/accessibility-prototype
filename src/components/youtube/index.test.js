import React from 'react';
import YoutubeEmbed from './index.js';
import ReactDOM from 'react-dom';

it('renders a Youtube video', () => {
  const div = document.createElement('YoutubeEmbed');
  ReactDOM.render(<YoutubeEmbed />, div);
});
