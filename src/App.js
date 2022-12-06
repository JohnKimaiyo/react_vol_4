import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Title from "./components/Title";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Fronted Devloper" />
      <Title name="Mobile Devloper" />
      <Title name="Solidity Devloper" />
    </div>
  );
}

export default App;
