import React from 'react';
import { FooterContainer } from './styles';

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Alogin. Todos os direitos reservados.</p>
  </FooterContainer>
);

export default Footer;
