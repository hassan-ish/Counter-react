import React, { Component } from "react";
import "./style.css";
export default class Counter extends Component {
  state = {
    counter: 0,
  };
  n = this.props.steps;
  onIncrement = () => {
    this.n = this.n > 0 ? parseInt(this.n) : 1;
    console.log();
    this.setState((prevState) => ({
      counter: prevState.counter + this.n,
    }));
  };
  onDecrement = () => {
    this.n = this.n > 0 ? parseInt(this.n) : 1;
    if (this.state.counter > 0) {
      this.setState((prevState) => ({
        counter: prevState.counter - this.n,
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
