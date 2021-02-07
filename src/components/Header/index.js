import React from 'react';
import Logo from '../../assets/logo.png';
import { Container } from './styles';

const Header = () => (
  <Container>
   <img src={Logo} className="logo" alt="cote" />
  </Container>
);

export default Header;