import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5vw; /* Padding em unidades de viewport */
  color: white;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Faz o vídeo preencher o contêiner */
  z-index: -1; /* Coloca o vídeo no fundo */
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 4rem); /* Ajusta o tamanho da fonte com base na largura da tela */
  font-weight: 700;
  color: #fff;
  z-index: 2;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9); /* Sombra mais forte para melhor contraste */
  margin-bottom: 2vh; /* Margin em unidades de altura da viewport */
  max-width: 60ch; /* Limita o texto a um número de caracteres */
`;

export const SubTitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem); /* Fonte fluida usando clamp */
  font-weight: 400;
  color: #fff;
  z-index: 2;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9); /* Sombra mais forte para melhorar a legibilidade */
  margin-bottom: 3vh; /* Margin em altura da viewport */
  max-width: 60ch; /* Limite de caracteres */
  line-height: 1.6;
`;

export const TextContainer = styled.div`
  z-index: 2;
  background: rgba(0, 0, 0, 0.5); /* Sombra ao redor da área de texto para maior contraste */
  padding: 2vh 2vw; /* Padding em unidades de viewport */
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5); /* Sombreamento adicional na área de texto */
  max-width: 100%;
`;

export const Button = styled.a`
    display: inline-block;
  padding: clamp(10px, 2vh, 15px) clamp(20px, 5vw, 30px); /* Padding fluido */
  border: none;
  background-color: #25d366; /* Cor do WhatsApp */
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 1.1rem); /* Fontes fluidas */
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #128c7e; /* Cor de hover do WhatsApp */
  }
`;
