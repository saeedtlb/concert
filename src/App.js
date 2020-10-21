import React from 'react';
import Header from './component/header & footer/Header';
import LandingPage from './component/featured/LandingPage';
import Info from './component/venueNfo/Info';
import Highlights from './component/highlights/Highlights';
import Card from './component/cards/Card';
import Location from './component/location';
import Footer from './component/header & footer/Footer';

import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Element name="feature">
          <LandingPage />
        </Element>

        <Element name="info">
          <Info />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Card />
        </Element>
      </main>

      <footer>
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </footer>
    </div>
  );
}

export default App;
