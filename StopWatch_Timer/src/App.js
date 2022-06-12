import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';

const App = () => {
  return (
    <div className="App">
      <Stopwatch></Stopwatch>
      <Timer></Timer>
    </div>
  );
}

export default App;
