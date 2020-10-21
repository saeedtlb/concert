import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import SideList from './SideList';
import './header.css';

function Header() {
  const [drawerState, setDrawer] = useState(false);
  const [showHeader, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  return (
    <AppBar
      className="nav"
      position="fixed"
      style={{
        background: showHeader ? '#000' : 'transparent',
        boxShadow: 'none'
      }}
    >
      <Toolbar>
        <div className="header">
          <div className="header__title">
            <h1>the venue</h1>
            <p>musical event</p>
          </div>
          <MenuIcon
            style={{
              alignSelf: 'center',
              cursor: 'pointer'
            }}
            fontSize="large"
            onClick={() => setDrawer(true)}
          />
          <Drawer
            anchor="right"
            open={drawerState}
            onClose={() => setDrawer(false)}
          >
            <SideList close={setDrawer} />
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
