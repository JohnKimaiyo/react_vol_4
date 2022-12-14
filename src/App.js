import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookList />
        <Navbar />
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
