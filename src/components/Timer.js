import React, { useState } from 'react';
import './Timer.css';
import { useTimer } from "../hooks/useTimer";

export function Timer() {
  const [isRunning, setRunning] = useState(true);
  const { hours, mins, secs } = useTimer(isRunning);

  return (
    <div className="timer">{hours}:{mins}:{secs}
      <button onClick={() => setRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}