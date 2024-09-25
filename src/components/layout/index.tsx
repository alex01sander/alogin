import React from 'react';
import { LayoutContainer, TextSection, Title, Description, Button, ImageSection, ImageCard } from './styles'; // Importa os styled-components
import layout from '../../assets/Multi Device Mockup.png'

const Layout = () => (
  <LayoutContainer>
    <ImageSection>
      <ImageCard src={layout} alt='layout' />
    </ImageSection>
    <TextSection>
      <Title>Transforme Sua Presença Online com Sites Responsivos e Modernos!</Title>
      <Description>Garanta que sua marca esteja sempre acessível com um site responsivo, adaptável a qualquer dispositivo, seja desktop, tablet ou smartphone. 
        Oferecemos soluções de design inovadoras que proporcionam uma experiência de navegação otimizada e envolvente para seus usuários. Aumente seu alcance, 
        melhore a 
        experiência do cliente e impulsione sua presença digital com um site que se ajusta perfeitamente a qualquer tela.</Description>
      <Button href="https://wa.me/5551992401184" target="_blank">Solicitar orçamento</Button>
    </TextSection>
  </LayoutContainer>
);

export default Layout;
