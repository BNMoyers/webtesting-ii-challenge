import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  
  let [strikeCount, setStrikeCount] = useState(0);
  let [ballCount, setBallCount] = useState(0);

  const ball = () => 
  ballCount < 4 ? setBallCount(ballCount +1) : (setBallCount(ballCount = 0), setStrikeCount(strikeCount = 0));
  
  const strike = () =>
   strikeCount < 3 ? setStrikeCount(strikeCount +1) :(setBallCount(ballCount = 0), setStrikeCount(strikeCount = 0));
  
  const hit = () => (setBallCount(ballCount = 0), setStrikeCount(strikeCount = 0));
  
  const foul = () => strikeCount = 2 ? strikeCount : setStrikeCount(strikeCount +1);
  
  
  return (
    <div className="App">
      <Display ballCount={ballCount} strikeCount={strikeCount}/>
      <Dashboard ball={ball}
                 strike={strike}
                 hit={hit}
                 foul={foul} />
    </div>
  );
}

export default App;
