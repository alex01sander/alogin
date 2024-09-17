import styled from 'styled-components';

// Container principal com animação de fade-in
export const Container = styled.div`
  padding: 40px;
  background: black;
  margin: 0 auto;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Título principal com transição de cor ao passar o mouse
export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #00ff88;
  }
`;

// Seções flexíveis com animação e efeito de hover
export const AboutContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* background-color: #f0f4fa; */
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

// Efeito de hover nas imagens
export const AboutImage = styled.img`
  width: 20%;
  height: auto;
  /* border-radius: 20px;  */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
  filter: brightness(0.8); /* Escurecendo a imagem */

  /* Formato com clip-path para dar um visual assimétrico */
  /* clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%); */

  &:hover {
    transform: scale(1.08);
    filter: brightness(1); /* Remove o escurecimento no hover */
  }
`;

// Texto moderno com transição de opacidade ao passar o mouse
export const AboutText = styled.p`
  flex: 1;
  font-size: 16px;
  color: #fff;
  line-height: 1.75;
  /* padding: 0 20px; */
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

// Estilo da Missão com o mesmo layout flex e transições
export const Mission = styled(AboutContainer)`
  /* background-color: #e6f2ff; */
`;

// Imagem da Missão
export const MissionImage = styled(AboutImage)`
  width: 20%;
  height: auto;
`;

// Texto da Missão
export const MissionText = styled(AboutText)``;

// Estilo da Visão com o mesmo layout flex e transições
export const Vision = styled(AboutContainer)`
  /* background-color: #f7f9fc; */
`;

// Imagem da Visão
export const VisionImage = styled(AboutImage)`
  width: 20%;
`;

// Texto da Visão
export const VisionText = styled(AboutText)``;
