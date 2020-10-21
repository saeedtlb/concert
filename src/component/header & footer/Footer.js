import React from 'react';
import Fade from 'react-reveal/Fade';

import './fotter.css';

const Footer = () => {
  return (
    <div className="fotter_bck">
      <Fade delay={500} bottom>
        <div className="fotter_txt">
          <h1>the venue</h1>
          <p>electron 2018. all rights reserved.&copy;</p>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
