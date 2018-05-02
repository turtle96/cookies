import React, { Component } from 'react';
import cookie from './cookie.png';
import './App.css';

const box = <Box label="Chocolate Chip"/>;

// can define a component this way
class App extends Component {
  render() {
    return box;
  }
}

// or define a component this way
function Box(props) {
  return (
    <div className="App">
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

export default App;
