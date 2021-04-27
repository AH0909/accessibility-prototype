import React from 'react';
import List from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders List component', () => {
  enzyme.configure({ adapter: new Adapter() })
  const list = enzyme.shallow(<List/>)
  expect(list.exists(".websiteList")).toBe(true)
});

it('renders anchor component', () => {
  enzyme.configure({ adapter: new Adapter() })
  const list = enzyme.shallow(<List/>)
  expect(list.exists('a[href="https://www.w3.org/WAI/standards-guidelines/wcag/"]')).toBe(true)
});

it('matches snapshot', () => {
  const wrapper = enzyme.mount(
    <List/>
  );
  expect(wrapper).toMatchSnapshot();
});
