import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resource/icons/ticket.png';

const MyButton = props => {
  const { text, bck, link, color } = props;
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{
        background: bck,
        color: color
      }}
    >
      <img
        src={TicketIcon}
        alt="icon_button"
        style={{
          width: '1vw',
          transform: 'translateX(-25%)'
        }}
      />
      {text}
    </Button>
  );
};

export default MyButton;
