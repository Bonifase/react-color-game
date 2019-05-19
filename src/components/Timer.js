import React from "react";
import ms from "pretty-ms";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  componentDidMount = () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1 * 1000
    );
  };

  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1 * 1000
    );
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }
  render() {
    let start =
      this.state.time === 0 ? (
        <button onClick={this.startTimer} className="customButton">
          start
        </button>
      ) : null;
    let stop =
      this.state.time === 0 || !this.state.isOn ? null : (
        <button onClick={this.stopTimer} className="customButton">
          stop
        </button>
      );
    let resume =
      this.state.time === 0 || this.state.isOn ? null : (
        <button onClick={this.startTimer} className="customButton">
          resume
        </button>
      );
    let reset =
      this.state.time === 0 || this.state.isOn ? null : (
        <button onClick={this.resetTimer} className="customButton">
          reset
        </button>
      );
    return (
      <div>
        <h4>Elapsed Time: {ms(this.state.time)}</h4>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}
export default Timer;
