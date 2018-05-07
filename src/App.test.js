import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from "./Clock";
import {mount} from "enzyme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('app should render a clock', () => {
  const wrapper = mount(<App />);
  const clock = <Clock/>;
  expect(wrapper.contains(clock)).toEqual(true);
});