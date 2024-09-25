import React from 'react';
import { FaTools, FaLayerGroup, FaBolt, FaShieldAlt, FaRocket, FaCogs, FaEye } from 'react-icons/fa';
import { Container, Title, BenefitSection, IconWrapper, BenefitText, BenefitTitle, Description } from './styles';

const About = () => (
  <Container>
    <Title>Somos uma empresa <strong>Especializada</strong> em fornecer soluções digitais.</Title>
    
    <BenefitSection>
      <IconWrapper>
        <FaRocket />
      </IconWrapper>
      <BenefitText>
        <BenefitTitle>Desenvolvimento de Sites com Foco em Velocidade e Desempenho</BenefitTitle>
        <Description>
          Criamos sites otimizados para máxima performance, com foco em tempo de carregamento reduzido e 
          alta performance, garantindo uma experiência fluida para o usuário e melhorando o ranqueamento em motores de busca.
        </Description>
      </BenefitText>
    </BenefitSection>

    <BenefitSection>
      <IconWrapper>
        <FaCogs />
      </IconWrapper>
      <BenefitText>
        <BenefitTitle>Transformar Negócios por Meio da Tecnologia</BenefitTitle>
        <Description>
          Nossa missão é capacitar empresas de todos os tamanhos a transformarem seus processos e operações por meio de soluções digitais inovadoras,
          ajudando-as a alcançar seus objetivos de forma mais eficiente e competitiva no mercado global.
        </Description>
      </BenefitText>
    </BenefitSection>

    <BenefitSection>
      <IconWrapper>
        <FaEye />
      </IconWrapper>
      <BenefitText>
        <BenefitTitle>Visão Centrada no Cliente</BenefitTitle>
        <Description>
          Nossa visão é desenvolver soluções digitais que coloquem o cliente no centro de tudo, criando experiências personalizadas e otimizadas para atender às
          suas necessidades, ao mesmo tempo em que impulsionam o crescimento e a inovação dos nossos clientes.
        </Description>
      </BenefitText>
    </BenefitSection>

    <BenefitSection>
      <IconWrapper>
        <FaShieldAlt />
      </IconWrapper>
      <BenefitText>
        <BenefitTitle>Controle de Qualidade Rigoroso</BenefitTitle>
        <Description>
          Aplicamos um processo rigoroso de controle de qualidade em todas as fases do desenvolvimento, 
          incluindo testes de funcionalidade, desempenho,
          compatibilidade entre navegadores e dispositivos, para assegurar uma experiência de alta qualidade e sem erros.
        </Description>
      </BenefitText>
    </BenefitSection>
  </Container>
);

export default About;
