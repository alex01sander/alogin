import React from 'react';
import { Container, Title, SubTitle, Button } from './styles';
import backgroundImage from "../../assets/3d-rendering-futuristic-computer.jpg"; // Substitua com a imagem de fundo desejada

const Home = () => (
  <Container backgroundImage={backgroundImage}>
    <Title>Sites Rápidos, Funcionais e Sob Medida</Title>
    <SubTitle>
    Oferecemos soluções completas para criação de sites que combinam velocidade, design inovador e funcionalidades inteligentes. Cada projeto é 
    desenvolvido pensando nas necessidades específicas do seu negócio, garantindo uma presença digital impactante e eficiente.
    </SubTitle>
    <Button>Comece aqui</Button>
  </Container>
);

export default Home;
