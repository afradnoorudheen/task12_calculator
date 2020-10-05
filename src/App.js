import React,{useState} from 'react';
import './App.css';
import Button from './Button.js';
import ClrButton from './ClrButton.js';
import Screen from './Screen.js'

function App() {

  const [display,setDisplay]=useState("0");
  return (
    <div className="App">
      <div className="Calc-wrapper">
      <div className="row">
         <Screen display={display}></Screen>
       </div>
        <div className="row">
       <Button type="num" display={display} setDisplay={setDisplay}>7</Button>
       <Button type="num" display={display} setDisplay={setDisplay}>8</Button>
       <Button type="num" display={display} setDisplay={setDisplay}>9</Button>
       <Button type="operator" display={display} setDisplay={setDisplay}>/</Button>
       </div>
       <div className="row">
       <Button type="num" display={display} setDisplay={setDisplay}>4</Button>
       <Button type="num" display={display} setDisplay={setDisplay}>5</Button>
       <Button type="num" display={display} setDisplay={setDisplay}>6</Button>
       <Button type="operator" display={display} setDisplay={setDisplay}>x</Button>
       </div>
       <div className="row">
       <Button type="num" display={display} setDisplay={setDisplay}>1</Button>
       <Button type="num" display={display} setDisplay={setDisplay}>2</Button>
       <Button type="num" display={display} setDisplay={setDisplay}>3</Button>
       <Button type="operator" display={display} setDisplay={setDisplay}>-</Button>
     </div>
     <div className="row">
       <Button type="num" display={display} setDisplay={setDisplay}>0</Button>
       <Button type="num" display={display} setDisplay={setDisplay}>.</Button>
       <Button type="operator" display={display} setDisplay={setDisplay}>=</Button>
       <Button type="operator" display={display} setDisplay={setDisplay}>+</Button>
     </div>
     <div className="row">
       <ClrButton setDisplay={setDisplay}>clear</ClrButton>
       
     </div>
       </div>
    </div>
  );
}

export default App;
