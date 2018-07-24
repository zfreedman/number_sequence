import React from "react"

class GameOverDisplay extends React.Component {
  render() {
    return (
      <button
        className="gameOverDisplay circleButton"
        onClick={this.handleClick}
      >
        Game Over
      </button>
    );
  }

  handleClick = () => this.props.handleClick();
}

export default GameOverDisplay;
