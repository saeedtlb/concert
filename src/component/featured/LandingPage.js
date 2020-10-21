import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import './landing.css';
import CountDown from './CountDown';
import slide_1 from '../../resource/slide_one.jpg';
import slide_2 from '../../resource/slide_two.jpg';
import slide_3 from '../../resource/slide_three.jpg';

class LandingPage extends Component {
  render() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            height: `${window.innerHeight}px`,
            overflow: 'hidden'
          }}
        >
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
            bullets={false}
            fillParent={true}
          >
            <div
              className="images"
              style={{
                background: `url(${slide_1})`
              }}
            >
              <div className="comment">ariana grande</div>
            </div>
            <div
              className="images"
              style={{
                background: `url(${slide_2})`,
                color: '#000',
                borderColor: '#000'
              }}
            >
              <div className="comment">ariana grande</div>
            </div>
            <div
              className="images"
              style={{
                background: `url(${slide_3})`
              }}
            >
              <div className="comment">ariana grande</div>
            </div>
          </AutoplaySlider>
        </div>
        <CountDown />
      </div>
    );
  }
}

export default LandingPage;
