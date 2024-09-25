import React from 'react';
import { Container, VideoBackground, Title, SubTitle, Button } from './styles';
import videoFile from '../../assets/Análise do gameplay.mp4'; // Caminho do vídeo

const Home = () => (
  <Container>
    <VideoBackground autoPlay muted loop>
      <source src={videoFile} type="video/mp4" />
      Seu navegador não suporta a tag de vídeo.
    </VideoBackground>
    <Title>Sites Rápidos, Funcionais e Sob Medida</Title>
    <SubTitle>
      Oferecemos soluções completas para criação de sites que combinam velocidade, design inovador e funcionalidades inteligentes. Cada projeto é 
      desenvolvido pensando nas necessidades específicas do seu negócio, garantindo uma presença digital impactante e eficiente.
    </SubTitle>
    <Button href="https://wa.me/5551992401184" target="_blank">Comece aqui</Button>
  </Container>
);

export default Home;
