import './App.css';
import React from "react";

import Card from "./components/layout/Card";
import RandomGen from "./components/basics/RandomGen";
import First from './components/basics/First';

export default function App() {

  return (
    <div className="App"> 
      <h1> Fundamentos React </h1>
      <div className="cards">
        <Card titulo="Random Challenge" color="green" >
          <RandomGen min={1} max={60} />
        </Card>

        <Card titulo="First Component">
          <First />
        </Card>
      </div>
    </div>
  );
}
