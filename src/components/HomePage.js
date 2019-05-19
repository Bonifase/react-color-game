import React, { Component } from "react";
import Timer from "./Timer";
import Game from "./Game";
export default class HomePage extends Component {
  render() {
    console.log(this.props.props.stopGame);
    return (
      <div>
        <button onClick={this.props.props.stopGame} className="customButton">
          Exit Game
        </button>
        <br />
        <Timer />
        <button onClick={this.props.props.startGame} className="customButton">
          Generate Color
        </button>

        <Game props={this.props.props.state.codes} />
      </div>
    );
  }
}
