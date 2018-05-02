// All React components must act like pure functions with respect to their props.

import React, { Component } from 'react';
import './App.css';
import Box from "./Box";
import Clock from "./Clock";

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

export default App;
