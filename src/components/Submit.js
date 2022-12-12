import React from "react";

export default function Submit() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("React Developer John");
  }

  return (
    <form onSumbit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
