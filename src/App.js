import React, { useState } from 'react';
import { LC, NC, SC, UC } from './components/Data/passChar';
import './App.css';

function App() {
 let [upperCase,setUpperCase]=useState(false);
 let [Lowercase,setLowercase]=useState(false);
 let [number,setNumbers]=useState(false);
 let [symbol,setSymbol]=useState(false);
 let[passwordlen,setPasswordlen]=useState(10);
 let[finalpassword,setfinal]=useState('');
 

 const copy =(e)=>{
  e.preventDefault();
  navigator.clipboard.writeText(finalpassword.toString());
}
 const createPassword=(e)=>{
  e.preventDefault();
  let charSet='';
  let fin='';
  if(upperCase || Lowercase || number || symbol){
   if(upperCase) charSet+=UC;
   if(Lowercase) charSet+=LC;
   if(number) charSet+=NC;
   if(symbol) charSet+=SC;

   
  
for(let i=0;i<passwordlen;i++){
fin+=charSet.charAt(Math.floor(Math.random()*charSet.length));
}


setfinal(fin);

  }
  else{
    alert("please select on checkbox");
  }
 }
  return (

   <div className='app'>
   <h2>HELLO</h2>
    <div className='passwordBox'>
      
      <h2>Password Generator</h2>
      <div className='passwordBoxin'>
      <input type='text ' value={finalpassword} readOnly></input> <button onClick={copy}>Copy</button>
    </div>
    <div className='passLength'>
    <label>Password Length</label>
    <input type='number' onChange={(e)=>{
setPasswordlen(e.target.value);
    }} value={passwordlen} max={20} min={10}></input>
    </div>
    <div className='passLength'>
    <label>Include Uppercase letters</label>
    <input type='checkbox' checked={upperCase} onChange={()=>{setUpperCase(!upperCase)}}></input>
    </div>
    <div className='passLength'>
    <label>Include Lowercase letters</label>
    <input type='checkbox' checked={Lowercase} onChange={()=>{setLowercase(!Lowercase)}}></input>
    </div>
    <div className='passLength'>
    <label>Include numbers</label>
    <input type='checkbox' checked={number} onChange={()=>{setNumbers(!number)}}></input>
    </div>
    <div className='passLength'>
    <label>Include symbols</label>
    <input type='checkbox' checked={symbol} onChange={()=>{setSymbol(!symbol)}}></input>
    </div>
    <button className='generatepass' onClick={createPassword}>Generate password</button>
    </div>
    
    </div>
  );
}

export default App;
