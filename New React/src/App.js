import React from "react";

import CounterFunctional from "./CounterFunctional";

import CounterClass from "./CounterClass";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>React Experiment 8</h1>

      <CounterFunctional />

      <CounterClass />
    </div>
  );
}

export default App;
