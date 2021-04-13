import React from 'react';
import YoutubeEmbed from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders video component', () => {
  enzyme.configure({ adapter: new Adapter() })
  const video = enzyme.shallow(<YoutubeEmbed/>)
  expect(video.exists(".video-responsive")).toBe(true)
  expect(video).toHaveLength(1)
});

it('matches snapshot', () => {
  const wrapper = enzyme.mount(
    <YoutubeEmbed/>,
  );
  expect(wrapper).toMatchSnapshot();
});
