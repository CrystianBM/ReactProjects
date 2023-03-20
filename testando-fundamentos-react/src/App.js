import React from "react";

import RandomGen from "./components/basics/RandomGen";

export default function App() {

  return (
    <div className="App">
      <h1> Fundamentos React </h1>
      <RandomGen 
        min={1} 
        max={60}
      />
    </div>
  );
}
