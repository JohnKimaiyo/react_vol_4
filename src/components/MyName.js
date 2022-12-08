import React from "react";
import { useState } from "react";

function MyName() {
  const [name, setName] = useState("john");
  const changeName = () => {
    setName("kimaiyo");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}>Click me</button>
    </div>
  );
}

export default MyName;
