import React, {Component} from "react";
import cookie from './cookie.png';

const colours = [
  "#FF5252",
  "#C2185B",
  "#3949AB",
  "#43A047",
  "#FFC400"
];

// can define a component this way
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {colour: colours[this.getRandomInt(0, colours.length)]};
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    // className used to specify a CSS class, check App.css
    return (
      <div>
        <header className="App-header" style={{backgroundColor: this.state.colour}}>
          <Cookie label={this.props.label}/>
        </header>
      </div>
    );
  }
}

// or define a component this way
function Cookie(props) {
  return (
    <div>
      <img src={cookie} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.label} Cookies</h1>
    </div>
  );
}

export default Box;