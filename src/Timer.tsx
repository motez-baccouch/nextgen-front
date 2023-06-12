import React, { useState, useEffect } from 'react';
import './QuizQuest.scss'

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isActive, seconds]);

  const handleSubmit = () => {
    setIsActive(false);
    localStorage.setItem('time', JSON.stringify(seconds));
    console.log(`Time saved in local storage: ${seconds} seconds`);
  };

  return (
    <div>
      
        <h1>{seconds}s</h1>
        <div className="text-center">
      
      <button className="custom-btn btn-12" onClick={handleSubmit}><span>stop</span><span>time</span></button>
    </div>
    </div>
  );
};

export default Timer;
