import React from 'react';
// import {Router, Route, Link} from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarItem, NavbarMenu, Title } from 'bloomer';

const AppHeader = () => {
  return (
    <Navbar style={{ background: 'rgb(244, 66, 66)' }}>
      <NavbarBrand>
        <NavbarItem isUnselectable>
          <Title isSize={3} tag="h1" hasTextColor="white">
            PokeGear
          </Title>
        </NavbarItem>
      </NavbarBrand>
      <NavbarMenu />
    </Navbar>
  );
};

export default AppHeader;
