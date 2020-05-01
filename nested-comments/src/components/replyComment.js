import React, { Component } from "react";

class DateAgo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diffTime: null,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      diffTime: Date.now() - this.props.time,
    });
  }
  render() {
    //console.log(this.props);
    //console.log(diffTimeCalculator);

    const diffSeconds = Math.floor(this.state.diffTime / 1000);
    const diffMinut = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinut / 60);
    const diffDays = Math.floor(diffHours / 24);

    const diffTimeCalculator = () => {
      if (diffSeconds < 10) {
        return `a few seconds ago`;
      } else if (diffSeconds < 60) {
        return `${diffSeconds} seconds ago`;
      } else if (diffMinut < 60) {
        return `${diffMinut} minuts ago`;
      } else if (diffHours < 24) {
        return `${diffHours} hours ago`;
      } else return `${diffDays} days ago`;
    };
    const CalculatedValue = diffTimeCalculator();
    return (
      <div>
        <p> {CalculatedValue} </p>
      </div>
    );
  }
}

export default DateAgo;
