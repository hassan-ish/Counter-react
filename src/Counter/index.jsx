import React, { Component } from "react";
import "./style.css";
export default class Counter extends Component {
  state = {
    counter: 0,
  };
  onIncrement = () => {
    let n = this.props.onIncrement;
    n = n > 0 ? Number(n) : 1;
    console.log();
    this.setState((prevState) => ({
      counter: prevState.counter + n,
    }));
  };
  onDecrement = () => {
    let n = this.props.onDecrement;
    n = n > 0 ? Number(n) : 1;
    if (this.state.counter > 0) {
      this.setState((prevState) => ({
        counter: prevState.counter - n,
      }));
    }
  };
  render() {
    return (
      <div>
        <span className="num">
          {this.state.counter > 0 ? this.state.counter : 0}
        </span>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}
