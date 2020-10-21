import React, { Component } from 'react';
import MyButton from '../UI/MyButton';
import Zoom from 'react-reveal/Zoom';

import './card.css';

class Card extends Component {
  state = {
    info: [
      {
        price: 100,
        position: 'Balcony',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, optio velit, soluta provident beatae natus perferendis sit cumque expedita suscipit dolor tempora consequuntur ex voluptate aut repellendus nam officia quod?',
        delay: 600
      },
      {
        price: 150,
        position: 'Medium',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint quod autem aliquam, nobis adipisci. Corrupti ut delectus totam animi ratione deserunt adipisci nostrum quas praesentium nobis, inventore, a porro!',
        delay: 0
      },
      {
        price: 100,
        position: 'Star',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius numquam, nihil sequi molestiae similique corporis possimus fugit nemo ut quod animi incidunt! Voluptates qui eveniet eius possimus accusamus voluptatem dignissimos.',
        delay: 605
      }
    ]
  };

  card = () =>
    this.state.info.map((card, index) => (
      <Zoom delay={card.delay} key={index}>
        <div className="card">
          <div className="container">
            <div className="header">
              <h2>${card.price}</h2>
              <h2>{card.position}</h2>
            </div>
            <div className="desc">{card.description}</div>
            <div className="footer">
              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#fff"
                link="http://zoomit.ir/search?q=1"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="container_cards">
        <div className="pricing">
          <h1>pricing</h1>
          <div className="wrapper">
            <div className="cards_group">{this.card()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
