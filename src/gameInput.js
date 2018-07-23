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
        placeholder={69}
        type="number"
        value={this.state.val}
      />
    );
  }

  handleOnChange = event => {
    this.setState({val: event.target.value});
  };
}

export default GameInput;
