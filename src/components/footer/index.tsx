import React from 'react';
import { FooterContainer, LogoContainer } from './styles';
import logo from '../../assets/Untitled_logo_329_basic-bg-file__3_-removebg-preview.png'

const Footer = () => (
  <>
    <FooterContainer>
      <LogoContainer>
      <img src={logo} alt="logo" />
    </LogoContainer>
    <p>&copy; {new Date().getFullYear()} Alogin. Todos os direitos reservados.</p>
  </FooterContainer>
  </>
);

export default Footer;
