import React, { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2>Class Component</h2>

        <p>Count: {this.state.count}</p>

        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;
