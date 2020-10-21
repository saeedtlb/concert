import React from 'react';
import Container from '@material-ui/core/Container';
import Percentage from './Percentage';
import MyButton from '../UI/MyButton';

import './highlights.css';

const Highlights = () => {
  return (
    <Container>
      <div className="highlight_text">
        <h1>highlights</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. ab animi
          error velit in fuga sequi ipsam, impedit exercitationem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolor id soluta facilis modi
          numquam quibusdam autem praesentium esse asperiores dolores magni
          omnis dolore sequi voluptatem fuga, repellat ipsa nobis? Nisi! ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur officiis,
          voluptate qui ut nihil obcaecati, dolor animi adipisci laborum ducimus
          enim! Ducimus amet labore placeat ex facere id autem consequatur!
        </p>
      </div>
      <div className="purchase_ticket">
        <Percentage />
        <div className="ticket">
          <h1>purchase tickets before 20th JUNE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            culpa possimus nihil fugiat autem, vitae, voluptas porro
            exercitationem hic cupiditate placeat, alias natus quos
            reprehenderit modi dicta ducimus aliquid? Cupiditate corrupti vitae
            odit, distinctio delectus cumque incidunt sint recusandae, quam
            culpa nulla rem deleniti sunt mollitia quae, laboriosam alias
            eveniet.
          </p>
          <MyButton
            text="Purchase tickets"
            bck="#ffa800"
            color="#fff"
            link="http://google.com"
          />
        </div>
      </div>
    </Container>
  );
};

export default Highlights;
