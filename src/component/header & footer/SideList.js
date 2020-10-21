import React from 'react';

import { scroller } from 'react-scroll';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideList = props => {
  const items = [
    {
      item: 'Event starts in',
      name: 'feature'
    },
    {
      item: 'venue info',
      name: 'info'
    },
    {
      item: 'Highlights',
      name: 'highlights'
    },
    {
      item: 'Pricing',
      name: 'pricing'
    },
    {
      item: 'Location',
      name: 'location'
    }
  ];

  const scrollToElements = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.close();
  };

  return (
    <List component="nav">
      {items.map((val, index) => (
        <ListItem
          key={index}
          style={{
            margin: '5px 15px',
            textTransform: 'capitalize',
            cursor: 'pointer'
          }}
          onClick={() => scrollToElements(val.name)}
        >
          {val.item}
        </ListItem>
      ))}
    </List>
  );
};

export default SideList;
