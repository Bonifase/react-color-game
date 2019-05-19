import React, { Component } from "react";
import Timer from "./Timer";
import Game from "./Game";
export default class HomePage extends Component {
  render() {
    console.log(this.props.props.stopGame);
    return (
      <div>
        <button onClick={this.props.props.stopGame}>Exit Game</button>
        <br />
        <Timer />
        <button onClick={this.props.props.startGame}>Generate Color</button>
        <Game props={this.props.props.state.codes} />
      </div>
    );
  }
}
