import React from 'react';

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
  return (
    <div></div>
  );
}