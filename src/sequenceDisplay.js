import React from "react";

import GameInput from "./gameInput";

// const DISPLAY_STATE =

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
        {this.state.doneCounting
          ? <GameInput
              handleSubmit={this.props.handleSubmit}
              testIndex={this.props.testIndex}
            />
          : <h1></h1>}
      </div>
    );
  }

  componentDidMount() {
    this.header = document.querySelector(".sequenceDisplay > h1");
    this.fakeRemount();
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

  fakeRemount = () => {
    this.setState({doneCounting: false});
    this.countDown();
  };

  showNumbers = () => {
    let count = 0;

    let showNextNumber = () => {
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
    };

    showNextNumber();
    this.interval = setInterval(showNextNumber, 1000);
  };
}

export default SequenceDisplay;
