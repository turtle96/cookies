// All React components must act like pure functions with respect to their props.

import React, { Component } from 'react';
import cookie from './cookie.png';
import './App.css';

const colours = [
  "#FF5252",
  "#C2185B",
  "#3949AB",
  "#43A047",
  "#FFC400"
];

// can define a component this way
class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <Box label="Chocolate Chip"/>
        <Box label="Lemon Barley"/>
      </div>
    );
  }
}

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {colour: colours[this.getRandomInt(0, 4)]};
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    // className used to specify a CSS class, check App.css
    return (
      <div>
        <header className="App-header" style={{backgroundColor: this.state.colour}}>
          <Cookie label={this.props.label}/>
        </header>
      </div>
    );
  }
}

// or define a component this way
function Cookie(props) {
  return (
    <div>
      <img src={cookie} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.label} Cookies</h1>
    </div>
  );
}

// using component allows use of additional features such as local state and lifecycle hooks
class Clock extends React.Component {
  constructor(props) {
    // call the base constructor with props
    super(props);

    // assigns the initial this.state
    this.state = {date: new Date()};
  }

  ///// lifecycle hooks setup

  // runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // called when a component is being removed from the DOM
  componentWillUnmount() {
    // clears the timer
    clearInterval(this.timerID);
  }

  tick() {
    // updates the state when called
    // on setState() call
    // React knows the state has changed, and calls the render() method again
    this.setState({
      date: new Date()
    });

    // do not modify this.state directly i.e. this.state.comment = 'Hello';
    // State Updates May Be Asynchronous
  }

  render() {
    return (
      <div>
        <h2 className="App-intro">It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
