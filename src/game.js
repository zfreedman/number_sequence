import React from "react";

import SequenceDisplay from "./sequenceDisplay";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: 3,
      numberMax: 10
    };
  }
  render() {
    return (
      <div className="game">
        <SequenceDisplay
          numbers={
            this.getNextNumbers(this.state.numbers)
          }
        />
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
}

export default Game;
