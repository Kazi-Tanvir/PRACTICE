import React, { useRef, useState } from 'react';

const App = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    const current = Date.now();
    // Check if we are resuming from a paused state
    if (startTime !== null && now !== null) {
      const previouslyElapsed = now - startTime;
      setStartTime(current - previouslyElapsed); 
    } else {
      // First time starting, or starting after a reset
      setStartTime(current);
    }
    setNow(current);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setStartTime(null);
    setNow(null);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed =((now - startTime) / 1000);
  }

  return (
    <div>
      <h1>Stopwatch: {secondsPassed} seconds</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
