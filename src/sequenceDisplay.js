import React from "react";

import GameInput from "./gameInput";

const DISPLAY_STATE_READY = 0;
const DISPLAY_STATE_NUMBERS = 1;
const DISPLAY_STATE_INPUT = 2;

class SequenceDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animateNumbersIndex: 0,
      displayState: DISPLAY_STATE_READY,
      readySetGoIndex: 0,
      readySetGoList: ["ready", "set", "go"],
    };
  }

  render() {
    // {this.state.doneCounting
    //   ? <GameInput
    //       handleSubmit={this.props.handleSubmit}
    //       testIndex={this.props.testIndex}
    //     />
    //   : <h1></h1>}
    return (
      <div className="sequenceDisplay">
        {this.renderBasedOnDisplayState()}
      </div>
    );
  }

  componentDidMount() {
    this.animateReadySetGo();
  }

  componentDidUpdate(prevProps) {
    // need to animate new numbers when numbers array has changed
    if (this.props.numbers.length != prevProps.numbers.length) {
      this.resetAnimationState();
      this.animateReadySetGo();
    }
  }

  animateReadySetGo = () => {
    this.interval = setInterval(() => {
      let i = this.state.readySetGoIndex;
      let arr = this.state.readySetGoList;
      if (i < arr.length - 1) {
        this.setState({readySetGoIndex: i + 1})
      }
      else {
        clearInterval(this.interval);
        this.showNumbers();
      }
    }, 1000);
  };

  renderBasedOnDisplayState = () => {
    switch (this.state.displayState) {
      case DISPLAY_STATE_READY:
        return this.state.readySetGoList[this.state.readySetGoIndex];
      case DISPLAY_STATE_NUMBERS:
        return this.props.numbers[this.state.animateNumbersIndex];
      case DISPLAY_STATE_INPUT:
        return (
          <GameInput
            handleSubmit={this.props.handleSubmit}
            testIndex={this.props.testIndex}
          />
        );
      default:
        return "this is bad";
    }
  };

  resetAnimationState = () => {
    this.setState({
      animateNumbersIndex: 0,
      displayState: DISPLAY_STATE_READY,
      readySetGoIndex: 0
    });
  };

  showNumbers = () => {
    this.setState({displayState: DISPLAY_STATE_NUMBERS});

    this.interval = setInterval(() => {
      let i = this.state.animateNumbersIndex;
      if (i < this.props.numbers.length - 1) {
        this.setState({animateNumbersIndex: i + 1})
      }
      else {
        clearInterval(this.interval);
        this.setState({displayState: DISPLAY_STATE_INPUT});
      }
    }, 1000);
  };
}

export default SequenceDisplay;
