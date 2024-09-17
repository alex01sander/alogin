import React from 'react';
import { Container, Title, SubTitle } from './styles';
import logo from "../../assets/bright-green-triangular-podium-product-presentation.jpg"

const Home = () => (
  <Container backgroundImage={logo}>
    <Title>Bem-vindo ao nosso site!</Title>
    <SubTitle>Conheça mais sobre nós</SubTitle>
  </Container>
);

export default Home;
