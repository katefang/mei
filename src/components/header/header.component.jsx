import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
  return (
    <AppBar style={{ position: 'static' }} className="app-bar">
      <Toolbar className="tool-bar">
        <p>Free Shipping & Free Returns</p>
        <Link className="link" to="/signin">
          Login/Register
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
