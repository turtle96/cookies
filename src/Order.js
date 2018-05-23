import {Component} from "react";
import Boxes from "./Box";
import React from "react";

const cookieTypes = ["Apple", "Chocolate Chip", "Lemon Barley", "Oatmeal"];

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      orders: {},
      name: '',
      address: '',
      show: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);    
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

  submitForm(name, address) {
    if (!name && !address) {
      return;
    }

    this.setState({name: name, address: address, show: true}, () => {
      console.log('Name submitted: ' + this.state.name);
      console.log('Address submitted: ' + this.state.address);
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
            <OrderForm submit={this.submitForm}/>
            <OrderOptionList list={cookieTypes} onChange={this.handleChange}/>
            {this.renderSubmittedOrder()}
          </div>
          <Boxes className="BoxesWrapper" boxes={this.state.boxes}/>
        </div>
      </div>
    );
  }

  renderSubmittedOrder() {
    if (this.state.show) {
      // todo style this
      return (
        <div>
          <h1>Order:</h1>
          <p>Name: {this.state.name}</p>
          <p>Address: {this.state.address}</p>
        </div>
      );
    }
  }
}

function OrderOptionList(props) {
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
      <div className="OrderOption">
        <label className="OrderLabel">
          {this.props.option}
        </label>
        <button onClick={this.handleClick} className="Button">Order</button>
      </div>
    );
  }
}

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', address: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.props.submit(this.state.name, this.state.address);
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
        <input type="submit" value="Submit" className="Button"/>
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