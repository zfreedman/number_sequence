import React from "react";

import GameOverDisplay from "./gameOverDisplay";
import GameReadyDisplay from "./gameReadyDisplay";
import SequenceDisplay from "./sequenceDisplay";

const GAME_STATE_OVER = -1;
const GAME_STATE_READY = 0;
const GAME_STATE_PLAYING = 1;

class Game extends React.Component {
  constructor(props) {
    super(props);

    let numberCount = 1;
    this.state = {
      gameState: GAME_STATE_READY,
      numberCount,
      numberMax: 100,
      numbers: this.getNextNumbers(numberCount),
      score: 0,
      testIndex: this.getTestIndex(numberCount),
    };
  }
  render() {
    return (
      <div className="game">
        <div className="gameContainer">
          {
            this.renderBasedOnState()
          }
        </div>
      </div>
    );
  }

  getNextNumbers = n => {
    let numbers = [];
    for (let i = 0; i < n; ++i) {
      numbers.push(i);
    }

    // fisher-yates shuffle
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    for (let i = numbers.length - 1; i > 0; --i) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = numbers[i];
      numbers[i] = numbers[j]
      numbers[j] = x;
    }
    console.log(numbers);
    return numbers;
  };

  getTestIndex = n => Math.floor(Math.random() * n);

  handleStart = () => {
    let numberCount = 1;
    this.setState({
      gameState: GAME_STATE_PLAYING,
      numberCount,
      numbers: this.getNextNumbers(numberCount),
      score: 0,
      testIndex: this.getTestIndex(numberCount)
    });
  };

  handleSubmit = answer => {
    // check if answer is correct
    let points = answer === this.state.numbers[this.state.testIndex] ? 1 : 0;

    // move to next level
    points === 1
      ? this.loadNextLevel()
      : this.loadGameOver();
  };

  handleRestart = () => {
    this.setState({
      gameState: GAME_STATE_READY
    });
  };

  loadGameOver = () => {
    this.setState({gameState: GAME_STATE_OVER});
  };

  loadNextLevel = () => {
    let numberCount = this.state.numberCount + 1;
    this.setState({
      numberCount,
      numbers: this.getNextNumbers(numberCount),
      testIndex: this.getTestIndex(numberCount)
    });
  };

  renderBasedOnState = () => {
    switch (this.state.gameState) {
      case GAME_STATE_OVER:
        return <GameOverDisplay handleClick={this.handleRestart} />
      case GAME_STATE_PLAYING:
        return <SequenceDisplay
          numbers={
            this.state.numbers
          }
          testIndex={
            this.state.testIndex
          }
          handleSubmit={this.handleSubmit}
        />
      case GAME_STATE_READY:
        return <GameReadyDisplay handleClick={this.handleStart} />
      default:
        null;
    }
  }
}

export default Game;
