import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: 140
    };
  }

  handleInputChange = (event) = => {
    this.setState({
      message: this.state.value - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleInputChange(event)} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
