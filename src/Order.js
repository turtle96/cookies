import {Component} from "react";
import Boxes from "./Box";
import React from "react";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {boxes: []};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(item) {
    this.setState({boxes: this.state.boxes.concat(item)});
  }

  render() {
    return (
      <div>
        <h1 className="Label">
          Ordered: {this.state.boxes.length} {getBoxOrBoxes(this.state.boxes.length)}
        </h1>
        <Boxes boxes={this.state.boxes}/>
        <OrderForm/>
        <OrderOption option="Apple" onChange={this.handleChange}/>
        <OrderOption option="Chocolate Chip" onChange={this.handleChange}/>
      </div>
    );
  }
}

class OrderOption extends Component {
  constructor(props) {
    super(props);
    this.state = {option: ''};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props.option);
  }

  render() {
    return (
      <label>
        {this.props.option}
        <button onClick={this.handleClick}
                className="Button">Order</button>
      </label>
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
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log('Name submitted: ' + this.state.name);
    console.log('Address submitted: ' + this.state.address);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value}
                 onChange={this.handleChange}/>
        </label>
        <label>
          Address:
          <input type="text" name="address" value={this.state.value}
                 onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
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