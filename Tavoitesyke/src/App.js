import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
 const [age, setAge] = useState(0);
 const [result, setResult] = useState(0);
 const [result1, setResult1] = useState(0)

function CalculateLower(){
  setResult((220-age)*0.65);
} 
 
function CalculateUpper(){
  setResult1((220-age)*0.85);
}
 return (
    <div>
      <h1>Heart rate limits calculator</h1>
       <form>
       <div>
        <label>Age</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} /> 
       </div>       
      <div>
        <label>Heart rate limits</label>
        <output>{result.toFixed(2) +"-"+ result1.toFixed(2)}</output>     
      </div>
      <button type="button" onClick={CalculateLower}>Calculate</button>
       </form>
    </div>
  );
}

export default App;
