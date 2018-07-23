import React from "react";

import GameInput from "./gameInput";

class SequenceDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doneCounting: false
    };
  }

  render() {
    return (
      <div className="sequenceDisplay">
        {this.state.doneCounting ? <GameInput /> : <h1></h1>}
      </div>
    );
  }

  componentDidMount() {
    this.header = document.querySelector(".sequenceDisplay > h1");
    this.countDown();
  }

  countDown = () => {
    let displays = ["ready", "set", "go"];
    let count = 0;
    this.interval = setInterval(() => {
      if (count < displays.length) {
        this.header.innerHTML = `
          <div class="countDown">
            ${displays[count++]}
          </div>
        `
      }
      else {
        clearInterval(this.interval);
        this.showNumbers();
      }
    }, 1000);
  };

  showNumbers = () => {
    let count = 0;
    this.interval = setInterval(() => {
      // count
      if (count < this.props.numbers.length) {
        this.header.innerHTML = this.props.numbers[count];
        count += 1
      }
      // else
      else {
        clearInterval(this.interval);
        this.setState({doneCounting: true});
      }
    }, 1000);
  };
}

export default SequenceDisplay;
