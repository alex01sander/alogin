import React from 'react';
import { Logo, Nav, NavItem, StyledHeader } from './styles';
import logo from "../../assets/Untitled_logo_329_basic-bg-file__3_-removebg-preview.png";

const Header = () => {
  return (
    <StyledHeader>
      <Logo backgroundImage={logo} />
      <Nav>
        <NavItem href="#serviços">Serviços</NavItem>
        <NavItem href="#projetos">Projetos</NavItem>
        <NavItem href="#contato">Contato</NavItem>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
