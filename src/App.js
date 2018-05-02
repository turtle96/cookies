// All React components must act like pure functions with respect to their props.

import React, { Component } from 'react';
import './App.css';
import Box from "./Box";

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
