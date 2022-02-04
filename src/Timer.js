import React, { useEffect, useState } from 'react';
import './Timer.css';

const END_OF_WORKDAY_HOURS = 21;
const END_OF_WORKDAY_MINS = 30;

function getRemainingWorkdayTime() {
  const now = new Date();
  const endOfWorkday = new Date();
  endOfWorkday.setHours(
    END_OF_WORKDAY_HOURS - now.getHours(),
    END_OF_WORKDAY_MINS - now.getMinutes(),
    -now.getSeconds(),
    -now.getMilliseconds()
  );

  return {
    hours: endOfWorkday.getHours(),
    mins: endOfWorkday.getMinutes(),
    secs: endOfWorkday.getSeconds()
  }
}

export function Timer() {
  const [isRunning, setRunning] = useState(true);
  const [remainingTime, setRemainingTime] = useState(getRemainingWorkdayTime());
  const { hours, mins, secs } = remainingTime;

  useEffect(() => {
    if (isRunning) {
      console.log('Interval set');
      const handle = setInterval(() => {
        setRemainingTime(getRemainingWorkdayTime());
      }, 500);

      return () => {
        // clean up
        console.log('Interval cleared');
        clearInterval(handle);
      }
    }
  }, [isRunning]);

  return (
    <div className="timer">{hours}:{mins}:{secs}
      <button onClick={() => setRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}