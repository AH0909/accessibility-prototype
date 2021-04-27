import React from 'react';
import App from './App';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


it('renders without crashing', () => {
  enzyme.configure({ adapter: new Adapter() })
  enzyme.shallow(<App/>)
});

it('matches snapshot', () => {
  const wrapper = enzyme.mount(
    <App/>,
  );
  expect(wrapper).toMatchSnapshot();
});
