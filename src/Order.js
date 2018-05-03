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
        <button onClick={this.handleClick} className="Button">Order</button>
      </div>
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