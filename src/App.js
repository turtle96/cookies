// All React components must act like pure functions with respect to their props.

import React, {Component} from 'react';
import './App.css';
import Box from "./Box";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <Order/>
      </div>
    );
  }
}

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {boxes: []};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({boxes: this.state.boxes.concat("Apple")});
  }

  render() {
    return (
      <div>
        <h1>Ordered: {this.state.boxes.length} boxes</h1>
        {
          this.state.boxes.map((item, index) => (
            <Box key={index} label={item}/>
          ))
        }
        <button onClick={this.handleClick} className="Button">Order</button>
      </div>
    );
  }
}

export default App;
