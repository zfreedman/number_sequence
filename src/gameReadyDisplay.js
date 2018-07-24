import React from "react";

class GameReadyDisplay extends React.Component {
  render() {
    return (
      <button
        className="gameReadyDisplay circleButton"
        onClick={this.handleClick}
      >
        Start
      </button>
    );
  }

  handleClick = () => this.props.handleClick();


}

export default GameReadyDisplay;
