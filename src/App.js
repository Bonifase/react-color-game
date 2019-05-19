import React, { Component } from "react";
import HomePage from "./components/HomePage";

export default class App extends Component {
  state = {
    start: false,
    score: 0,
    codes: [],
    stopGame: this.stopGame
  };

  startGame = e => {
    e.preventDefault();
    this.setState({ start: true });
    var count = 10;
    let colors = [];
    for (var i = 0; i < count; i++) {
      let x = Math.floor(Math.random() * 10 + 1);
      colors.push(x);
    }
    this.setState({ codes: colors });
  };
  stopGame = e => {
    e.preventDefault();
    this.setState({ start: false });
    console.log(this.state);
  };
  render() {
    return (
      <div>{this.state.start === true ? <HomePage props={this} /> : <button onClick={this.startGame}>Start Game</button>}</div>
    );
  }
}
