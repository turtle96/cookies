// All React components must act like pure functions with respect to their props.

import React, { Component } from 'react';
import cookie from './cookie.png';
import './App.css';

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

// or define a component this way
function Box(props) {
  // className used to specify a CSS class, check App.css
  return (
    <div>
      <header className="App-header">
        <Cookie label={props.label}/>
      </header>
    </div>
  );
}

class Cookie extends Component {
  render() {
    return (
      <div>
        <img src={cookie} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.label} Cookies</h1>
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

  render() {
    return (
      <div>
        <h2 className="App-intro">It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
