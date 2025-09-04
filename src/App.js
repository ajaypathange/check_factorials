import React, { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const calculateFactorial = () => {
    if (num === "" || num < 0) {
      setResult("Please enter a positive number");
      return;
    }

    let n = parseInt(num);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
      fact *= i;
    }

    setResult(`Factorial of ${n} is ${fact}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Factorial Calculator</h1>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={calculateFactorial} style={{ padding: "8px 12px" }}>
        Calculate
      </button>

      <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        {result}
      </div>
    </div>
  );
}

export default App;
