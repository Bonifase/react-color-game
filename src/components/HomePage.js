import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.props.stopGame}>Stop Game</button>
        <br />
        This is HomePage
      </div>
    );
  }
}
