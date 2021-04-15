import React from 'react';
import Toggle from './toggler.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders the toggle', () => {
  enzyme.configure({ adapter: new Adapter() })
  const toggle = enzyme.shallow(<Toggle/>)
  expect(toggle.exists(".toggleButton")).toBe(true)
});

it('renders the moon', () => {
  enzyme.configure({ adapter: new Adapter() })
  const toggle = enzyme.mount(<Toggle theme={"light"}/>)
  expect(toggle.exists(".moon")).toBe(true)
});

it('renders the sun', () => {
  enzyme.configure({ adapter: new Adapter() })
  const toggle = enzyme.mount(<Toggle theme={"dark"}/>)
  expect(toggle.exists(".sun")).toBe(true)
});

it('the toggle can be clicked', () => {
  const clickToggle=jest.fn()
  enzyme.configure({ adapter: new Adapter() })
  const toggle = enzyme.mount(<Toggle theme={"light"} toggleTheme={clickToggle}/>)
  expect(toggle.exists(".toggleButton")).toBe(true)
  expect(toggle.exists(".moon")).toBe(true)
  toggle.find("button.toggleButton").simulate('click')
  expect(clickToggle.mock.calls.length).toBe(1)
});

it('matches the snapshot', () => {
  const wrapper = enzyme.mount(
    <Toggle/>
  );
  expect(wrapper).toMatchSnapshot();
});
