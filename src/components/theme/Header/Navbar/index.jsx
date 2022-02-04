import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Wrapper2, Brand, Line } from './styles';
import logo from 'assets/illustrations/logo.svg';

const Navbar = () => {

  return (
    <Wrapper as={Container}>
      <Wrapper2>
      <Brand as={Link} to="/" >
        <img src={logo} alt="LDU logo" />
      </Brand>
      <NavbarLinks/>
      </Wrapper2>
      <Line /> 
    </Wrapper>
  );
};

export default Navbar;
