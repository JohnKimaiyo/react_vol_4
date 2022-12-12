import React from "react";

export default function Event() {
  const testClick = () => {
    alert("React Developer Kimaiyo");
  };
  return (
    <div className="App">
      <button onClick={testClick}>Click Me</button>
    </div>
  );
}
