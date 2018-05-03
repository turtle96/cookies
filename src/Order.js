import {Component} from "react";
import Boxes from "./Box";
import React from "react";

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
        <h1 className="Label">
          Ordered: {this.state.boxes.length} {getBoxOrBoxes(this.state.boxes.length)}
        </h1>
        <Boxes boxes={this.state.boxes}/>
        <OrderForm/>
        <button onClick={this.handleClick} className="Button">Order</button>
      </div>
    );
  }
}

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function getBoxOrBoxes(length) {
  if (length === 1) {
    return "box";
  } else {
    return "boxes";
  }
}

export default Order;