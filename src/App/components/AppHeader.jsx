import React from 'react';
// import {Router, Route, Link} from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarItem } from 'bloomer';

const AppHeader = () => {
  return (
    <Navbar>
      <NavbarBrand style={{ 'background-color': 'rgb(244, 66, 66)' }}>
        <NavbarItem style={{ 'margin-left': 'auto', 'margin-right': 'auto', color: 'white' }}>
          PokeGear
        </NavbarItem>
      </NavbarBrand>
    </Navbar>
  );
};

export default AppHeader;
