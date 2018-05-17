import {Component} from "react";
import Boxes from "./Box";
import React from "react";

const cookieTypes = ["Apple", "Chocolate Chip", "Lemon Barley", "Oatmeal"];

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      orders: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(item) {
    this.setState({boxes: this.state.boxes.concat(item)});

    let newOrders = this.state.orders;

    if (!newOrders[item]) {
      newOrders[item] = 0;
    }

    newOrders[item] = newOrders[item] + 1;

    this.setState({orders: newOrders}, function () {
      console.log(this.state.orders);
    });
  }

  render() {
    return (
      <div>
        <h1 className="Label">
          Ordered: {this.state.boxes.length} {getBoxOrBoxes(this.state.boxes.length)}
        </h1>
        <div className="Wrapper">
          <div className="OrderFormWrapper">
            <OrderForm/>
            <OrderCookieList list={cookieTypes} onChange={this.handleChange}/>
          </div>
          <Boxes className="BoxesWrapper" boxes={this.state.boxes}/>
        </div>
      </div>
    );
  }
}

function OrderCookieList(props) {
  const cookieList = props.list.map(function (item, index) {
    return (<OrderOption key={item + index} option={item} onChange={props.onChange}/>);
  });

  return (
    <div>
      {cookieList}
    </div>
  );
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
        <button onClick={this.handleClick} className="Button">Order</button>
        <br/>
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
        <br/>
        <label>
          Address:
          <input type="text" name="address" value={this.state.value}
                 onChange={this.handleChange}/>
        </label>
        <br/>
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