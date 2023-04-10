import './App.css';
import React from "react";

import Card from "./components/layout/Card";
import RandomGen from "./components/basics/RandomGen";
import First from './components/basics/First';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import StudentList from './components/repetition/StudentList';
import ProductList from './components/repetition/ProductList';

export default function App() {

  return (
    <div className="App"> 
      <h1> Fundamentos React </h1>
      <div className="cards">
        <Card titulo="Repetition 2" color="orange"  className='tableList' >
          <ProductList /> 
        </Card>

        <Card titulo="Repetition" color="gray" >
          <StudentList /> 
        </Card>

        <Card titulo="Component with Child" color="darkblue" >
          <Family secondName="Ferreira"> 
            <FamilyMember name="Pedro" />
            <FamilyMember name="Lucas" />
            <FamilyMember name="Julia" />
          </Family>  
        </Card>

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
