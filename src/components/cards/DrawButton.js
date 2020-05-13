import React, { Component } from "react";

class DrawButton extends Component {
  render() {
    return (
      <div className="button-container center">
        <button
          className="btn random-btn btn-large "
          onClick={this.props.drawCard}
        >
          Draw Card
        </button>
      </div>
    );
  }
}

export default DrawButton;
