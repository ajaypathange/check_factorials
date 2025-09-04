import React, { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    if (num === "") {
      setResult("Please enter a number");
      return;
    }

    const n = parseInt(num);
    const digits = num.split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);

    if (sum === n) {
      setResult(`${n} is an Armstrong number `);
    } else {
      setResult(`${n} is NOT an Armstrong number `);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Armstrong Number Checker</h1>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={checkArmstrong} style={{ padding: "8px 12px" }}>
        Check
      </button>

      <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        {result}
      </div>
    </div>
  );
}

export default App;
