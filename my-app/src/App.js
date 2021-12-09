import react from 'react';
import reactDom from 'react-dom';
import { ReactDOM } from 'react';
import  './index.css';
import React, { useState, useRef, useEffect, useReducer } from "react";
import { Component } from 'react/cjs/react.production.min';
var i=0;
function App(){
  var isgoing=true;
  var i=0;
  var t;
  var mins=0;
  var hours=0;
  function Stop(){
    isgoing=false;
    i=0;mins=0;hours=0;
    document.getElementById("idd").innerHTML=i;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("mins").innerHTML=mins;
    return <div className='timer'>
  <button id='START' onClick={Start}>START</button>
  <button id='WAIT' onDoubleClick={go}>WAIT</button>
  <button id='STOP' onClick={Stop}>STOP</button>
  <div>sec <p id="idd">0</p></div>
  <div>min <p id="mins">0</p></div>
  <div>hour <p id="hours">0</p></div>
  </div>
  

    
  }
  function go(){
isgoing=false;
return <div className='timer'>
  <button id='START' onClick={Start}>START</button>
  <button id='WAIT' onDoubleClick={go}>WAIT</button>
  <button id='STOP' onClick={Stop}>STOP</button>
  <div>sec <p id="idd">0</p></div>
  <div>min <p id="mins">0</p></div>
  <div>hour <p id="hours">0</p></div>
  </div>
  

  }
  function RESET(){
    i=-1;hours=0;mins=0;
  }
  function Start(){
    isgoing=true;
t=setInterval(() => {
  if(isgoing===false){
      clearInterval(t);
      
    }
    else{
    i++;
    
    if(i===60){
      i=0;
      mins++;
    }
    if(mins===60){
      mins=0;
      hours++;
    }}
    document.getElementById("idd").innerHTML=i;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("mins").innerHTML=mins;
}, 1000);}
return<span> <div className='buttons'>
  <button className='but' onClick={Start}>START</button>
  <button className='osobenna' onDoubleClick={go}>WAIT</button>
  <button className='but' onClick={Stop}>STOP</button>
  <button className='but' onClick={RESET}>RESET</button></div>
  <div className='timer'>
  <div>sec <p id="idd">0</p></div>
  <div>min <p id="mins">0</p></div>
  <div>hour <p id="hours">0</p></div>
  
 </div> 
</span>
}
export default App 