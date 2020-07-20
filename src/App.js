// All React components must act like pure functions with respect to their props.

import React, {Component} from 'react';
import './App.css';
import Clock from "./Clock";
import Order from "./Order";
import shop from "./images/shop.svg";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main/>
                <footer className="Footer">© {new Date().getFullYear()}</footer>
            </div>
        );
    }
}

class Main extends Component {
    render() {

        return (
            <div className="Main">
                <header className="Header">
                    <a href={"/"}>
                        Let's Order Cookies
                    </a>
                    <img src={shop}/>
                </header>

                <Clock/>
                <Order/>
            </div>
        );
    }
}

export default App;
