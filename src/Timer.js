import React, { useEffect, useState } from 'react';

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
  const [remainingTime, setRemainingTime] = useState(getRemainingWorkdayTime());
  const { hours, mins, secs } = remainingTime;

  useEffect(() => {
    console.log('Interval set');
    const handle = setInterval(() => {
      setRemainingTime(getRemainingWorkdayTime());
    }, 500);

    return () => {
      // clean up
      console.log('Interval cleared');
      clearInterval(handle);
    }
  }, []);

  return (
    <div>{hours}:{mins}:{secs}</div>
  );
}