import React, { Component } from "react";
import HomePage from "./components/HomePage";

export default class App extends Component {
  state = {
    start: false,
    score: 0,
    stopGame: this.stopGame
  };

  startGame = e => {
    e.preventDefault();
    this.setState({ start: true });
    // console.log(this.state);
  };
  stopGame = e => {
    e.preventDefault();
    this.setState({ start: false });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        {this.state.start === true ? (
          <HomePage stopGame={this.stopGame} />
        ) : (
          <button onClick={this.startGame}>Start Game</button>
        )}
      </div>
    );
  }
}
