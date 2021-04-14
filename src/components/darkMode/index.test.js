import React from 'react';
import Toggle from './toggler.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders the toggle', () => {
  enzyme.configure({ adapter: new Adapter() })
  const toggle = enzyme.shallow(<Toggle/>)
  expect(toggle.exists(".toggleButton")).toBe(true)
  expect(toggle.exists(".sun")).toBe(true)
  expect(toggle.exists(".moon")).toBe(false)
});

it('matches snapshot', () => {
  const wrapper = enzyme.mount(
    <Toggle/>,
  );
  expect(wrapper).toMatchSnapshot();
});
