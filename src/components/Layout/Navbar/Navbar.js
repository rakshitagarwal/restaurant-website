import React from 'react';

import NavbarCart from './NavbarCart';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <>
      <header className="header">
        <h2>React Meals</h2>
        <NavbarCart onClick={props.onShowCart} />
      </header>
    </>
  );
};

export default Navbar;
