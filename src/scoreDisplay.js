import React from "react";

class ScoreDisplay extends React.Component {
  render() {
    return (
      <div className="scoreDisplay">
        {this.props.score}
      </div>
    );
  }
}

export default ScoreDisplay;
