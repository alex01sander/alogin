import styled from 'styled-components';

// Container principal
export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    height: auto;
  }
`;

// Seção de texto
export const TextSection = styled.div`
  max-width: 40%;
  color: #000;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

// Título
export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Descrição
export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

// Botão
export const Button = styled.a`
  display: inline-block; /* Faz com que o link se comporte como um botão */
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none; /* Remove o sublinhado dos links */
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

// Seção de imagens
export const ImageSection = styled.div`
  max-width: 50%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

// Estilo das imagens
export const ImageCard = styled.img`
  width: 100%;
  height: auto;
`;
