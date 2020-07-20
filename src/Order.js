import React, {Component} from "react";
import Boxes from "./Box";

const COOKIE_TYPES = ["Apple", "Chocolate Chip", "Lemon Barley", "Oatmeal"];

const ERROR_NAME_AND_ADDRESS = "x Please ensure both name and address are filled in.";
const ERROR_NUM_ORDERS = "x You have not selected anything to order.";

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
            orders: {},
            name: '',
            address: '',
            showSubmission: false,
            showSubmissionError: "",
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

        this.setState({orders: newOrders});
    }

    submitForm(name, address) {
        if (!name || !address) {
            this.setState({showSubmissionError: ERROR_NAME_AND_ADDRESS});
            return;
        }
        if (this.state.boxes.length < 1) {
            this.setState({showSubmissionError: ERROR_NUM_ORDERS});
            return;
        }

        this.setState({name: name, address: address, showSubmission: true, showSubmissionError: ''});
    }

    render() {
        return (
            <div>
                <h1>
                    Ordered: {this.state.boxes.length} {getBoxOrBoxes(this.state.boxes.length)}
                </h1>
                <div className="Wrapper">
                    <div className="OrderFormWrapper">
                        {this.renderOrderForm()}
                        {this.renderSubmittedOrder()}
                    </div>
                    <Boxes boxes={this.state.boxes}/>
                </div>
            </div>
        );
    }

    renderOrderForm() {
        if (!this.state.showSubmission) {
            return (
                <div>
                    <OrderForm show={!this.state.showSubmission}
                               showSubmissionError={this.state.showSubmissionError}
                               submit={this.submitForm}/>
                    <OrderOptionList list={COOKIE_TYPES} onChange={this.handleChange}/>
                </div>
            )
        }
    }

    renderSubmittedOrder() {
        const orderList = Object.keys(this.state.orders).map((key, index) => {
            return (<p key={key + index}>{key}: {this.state.orders[key]}</p>);
        });

        if (this.state.showSubmission) {
            return (
                <div>
                    <h2>Order list:</h2>
                    {orderList}

                    <h2>To be sent to:</h2>
                    <p>
                        Name: {this.state.name}
                    </p>
                    <p>
                        Address: {this.state.address}
                    </p>
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
        <div className="OrderOptionList">
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
        this.state = {
            name: '',
            address: '',
        };

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
            <form className="OrderForm" onSubmit={this.handleSubmit}>
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
                {this.renderAlert()}
                <button type="submit" className="Button" style={{margin: "6px"}}>Submit</button>
            </form>
        );
    }

    renderAlert() {
        if (this.props.showSubmissionError) {
            return (
                <div className="Alert">
                    {this.props.showSubmissionError}
                </div>
            );
        }
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