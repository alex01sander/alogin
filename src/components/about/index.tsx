import React from 'react';
import { AboutContainer, AboutImage, AboutText, 
  Container, Mission, MissionImage, MissionText, Title, Vision, VisionImage, VisionText } from './styles';
import about from "../../assets/missaaa.webp";
import mission from "../../assets/missão.webp";
import vision from "../../assets/macro-eye-iris.jpg";

const About = () => (
  <Container>
    <Title>Somos uma empresa especializada em fornecer soluções digitais.</Title>

    <AboutContainer>
      <AboutImage src={about} alt="Sobre a Empresa" />
      <AboutText>
        Somos uma empresa focada em oferecer serviços de criação de sites e landing pages que proporcionam resultados reais.
        Com uma abordagem personalizada para cada cliente, nossa missão é desenvolver soluções que combinem design atraente
        com funcionalidade, sempre alinhadas aos seus objetivos de negócio. Acreditamos que um site bem estruturado é
        uma poderosa ferramenta para potencializar a presença online de qualquer empresa.
      </AboutText>
    </AboutContainer>

    <Mission>
      <MissionImage src={mission} alt="Missão" />
      <MissionText>
        Criar sites e landing pages que reflitam a identidade de cada cliente, oferecendo uma experiência digital única e eficiente.
      </MissionText>
    </Mission>

    <Vision>
      <VisionImage src={vision} alt="Visão" />
      <VisionText>
        Ser uma referência em desenvolvimento de sites e landing pages, ajudando empresas a fortalecerem suas presenças digitais.
      </VisionText>
    </Vision>
  </Container>
);

export default About;
