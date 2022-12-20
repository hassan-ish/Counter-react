import React, { Component } from "react";
import "./style.css";
export default class Counter extends Component {
  state = {
    counter: 0,
  };
  n = this.props.steps;
  steps = this.n > 0 ? parseInt(this.n) : 1;
  onIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + this.steps,
    }));
  };
  onDecrement = () => {
    if (this.state.counter > 0) {
      this.setState((prevState) => ({
        counter: prevState.counter - this.steps,
      }));
    }
  };
  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}
