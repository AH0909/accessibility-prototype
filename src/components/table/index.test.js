import React from 'react';
import Table from './index.js';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

it('renders Table component', () => {
  enzyme.configure({ adapter: new Adapter() })
  const table = enzyme.shallow(<Table/>)
  expect(table.exists(".results")).toBe(true)
});

it('matches snapshot', () => {
  const wrapper = enzyme.mount(
    <Table/>
  );
  expect(wrapper).toMatchSnapshot();
});
