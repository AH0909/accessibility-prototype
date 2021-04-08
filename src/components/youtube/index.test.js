import React from 'react';
import YoutubeEmbed from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders video component', () => {
  enzyme.configure({ adapter: new Adapter() })
  const contact = enzyme.shallow(<YoutubeEmbed/>)
  expect(contact.exists(".video-responsive")).toBe(true)
});
