import React from "react";
import { useState, useEffect } from "react";

function Mycount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`you have clicked the button ${count} times`);
  });

  return (
    <div>
      <h3>
        <p>counting the number of clickes</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </h3>
    </div>
  );
}

export default Mycount;
