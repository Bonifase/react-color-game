import React, { Component } from "react";
import HomePage from "./components/HomePage";
import "./App.css";

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
    var count = 21;
    let colors = [];
    for (var i = 0; i < count; i++) {
      let x =
        "#" +
        Math.random()
          .toString(16)
          .slice(2, 8);
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
      <div className="App-header">
        {this.state.start === true ? <HomePage props={this} /> : <button onClick={this.startGame}>Start Game</button>}
      </div>
    );
  }
}
