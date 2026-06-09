import React, { useState } from "react";

function CounterFunctional() {
  const [count, setCount] = useState(0);

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
      <h2>Functional Component</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterFunctional;
