import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import './highlights.css';

const Percentage = () => {
  const [progressStart, setProgressStart] = useState(0);
  const progressEnd = 32;

  useEffect(() => {
    if (progressStart !== 0) {
      count();
    }
  }, [progressStart]);

  const count = () => {
    setTimeout(() => {
      if (progressStart < progressEnd) {
        setProgressStart(progressStart + 1);
      }
    }, 70);
  };

  return (
    <div className="percentage">
      <div className="container">
        <Fade onReveal={() => count()}>
          <span>{progressStart}%</span>
          <span>OFF</span>
        </Fade>
      </div>
    </div>
  );
};

export default Percentage;
