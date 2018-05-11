import React, {Component} from "react";
import cookie from './cookie.png';

const colours = [
  "#FF5252",
  "#C2185B",
  "#3949AB",
  "#009688",
  "#43A047",
  "#FFC400"
];

// can define a component this way
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {colour: colours[this.getRandomInt(0, colours.length - 1)]};
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const styling = {backgroundColor: this.state.colour};

    // className used to specify a CSS class, check App.css
    return (
      <div className="Box" style={styling}>
        <Cookie />
        <h1 className="Label">{this.props.label} Cookies</h1>
      </div>
    );
  }
}

function Boxes(props) {
  // render a Box for each item
  const boxes = props.boxes.map((item, index) => (
    <Box key={item + index} label={item}/>
  ));

  return (
    <div>
      {boxes}
    </div>
  );
}

// or define a component this way
function Cookie(props) {
  return (
    <img src={cookie} className="Cookie" alt="cookie"/>
  );
}

export default Boxes;