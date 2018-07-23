import React from "react";

class GameInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {val: ""};
  }
  render()
  {
    return (
      <input
        onChange={this.handleOnChange}
        onKeyDown={this.handleOnKeyDown}
        placeholder={`#${this.props.testIndex + 1}`}
        type="number"
        value={this.state.val}
      />
    );
  }

  handleOnChange = event => {
    this.setState({val: event.target.value});
  };

  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      this.props.handleSubmit(Number(this.state.val));
    }
  };
}

export default GameInput;
