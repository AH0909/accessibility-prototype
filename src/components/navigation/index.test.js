import React from 'react';
import NavInfo from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders navigation button', () => {
  enzyme.configure({ adapter: new Adapter() })
  const navInfo = enzyme.shallow(<NavInfo/>)
  expect(navInfo.exists(".navigationButton")).toBe(true)
});

it('should render navigation button', () => {
  const wrapper = enzyme.mount(
      <NavInfo/>
  );
  expect(wrapper).toMatchSnapshot();
});
