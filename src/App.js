// All React components must act like pure functions with respect to their props.

import React, {Component} from 'react';
import './App.css';
import Clock from "./Clock";
import Order from "./Order";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
            Let's Order Cookies
        </header>

        <Clock/>
        <Order/>
        <footer className="Footer">© {new Date().getFullYear()}</footer>
      </div>
    );
  }
}

export default App;
