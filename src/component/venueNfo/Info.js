import React from 'react';
import Zoom from 'react-reveal/Zoom';

import './info.css';

function Info() {
  return (
    <div className="info">
      <div className="container">
        <Zoom duration={600}>
          <div className="events">
            <div className="icon_bck date_icon"></div>
            <h1>events date &amp; time</h1>
            <p>
              7 august 2020 <br /> @10.00pm
            </p>
          </div>
        </Zoom>

        <Zoom duration={600} delay={600}>
          <div className="events">
            <div className="icon_bck location_icon"></div>
            <h1>events location</h1>
            <p>
              345 speer street <br /> oakland, CA 9835
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Info;
