import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from "./Clock";
import {mount} from "enzyme";
import Boxes from "./Box";

let originalDateNow;

jest.useFakeTimers();

beforeEach(function () {
  originalDateNow = Date.now;
  Date.now = function () {
    let date = new Date('2017-06-22');
    date.setHours(3);
    date.setMinutes(5);
    date.setSeconds(5);
    return date;
  };
  setInterval.mock.calls = [];
});

afterEach(function () {
  Date.now = originalDateNow;
});

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

it('clock should advance by 1 second', () => {
  const wrapper = mount(<Clock />);

  const now = Date.now();

  // before time skip 1 second
  expect(wrapper.state().date).toEqual(now);

  Date.now = function () {
    let date = new Date(now);
    date.setSeconds(date.getSeconds() + 1);
    return date;
  };

  // run 1 second
  jest.runTimersToTime(1000);

  // called setInterval()
  expect(setInterval.mock.calls.length).toEqual(1);

  now.setSeconds(now.getSeconds() + 1);

  // time went forward 1 second
  expect(wrapper.state().date).toEqual(now);
});

it('render boxes with a colour and correct label', () => {
  const samples = ["Lemon Tea", "Strawberry", "Apple Cinnamon"];
  const wrapper = mount(<Boxes boxes={samples}/>);

  const boxes = wrapper.find('Box');

  expect(boxes.length).toEqual(3);

  boxes.children().forEach(function (item) {
    console.log(item.props().style.backgroundColor);
    expect(item.props().style.backgroundColor).toBeDefined();
  });

  const renderedLabels = boxes.map(function (item) {
    return item.props().label;
  });

  expect(renderedLabels).toEqual(samples);
});

//todo do snapshot testing