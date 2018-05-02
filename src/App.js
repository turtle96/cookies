import React, { Component } from 'react';
import cookie from './cookie.png';
import './App.css';

const box = <Box label="Cookies"/>;

class App extends Component {
  render() {
    return box;
  }
}

function Box(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cookie} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.label}</h1>
      </header>
    </div>
  );
}

export default App;
