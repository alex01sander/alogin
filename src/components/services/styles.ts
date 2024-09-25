import styled from 'styled-components';

export const Container = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #000; /* Fundo preto, como na imagem */
  color: #fff;

  h2 {
    font-size: 3rem;
    margin-bottom: 40px;
    font-weight: bold;
  }
`;

export const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Sempre três colunas */
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Duas colunas em telas médias */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Uma coluna em telas pequenas */
  }
`;


export const ServiceItem = styled.div`
  text-align: center;
  padding: 20px;
  
  border-radius: 10px;
  
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Efeito de hover */
  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7); 
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 15px;
    margin-bottom: 10px; 
    color: #fff; 
  }

 p {
  font-size: 1rem;
  max-width: 29rem;
  margin: 0 auto; /* Centraliza o parágrafo horizontalmente */
  margin-top: 10px;
  color: #ccc;
  line-height: 1.6;
  text-align: left; /* Alinha o texto à esquerda */
}


  @media (max-width: 768px) {
    padding: 15px; /* Reduz o padding em telas menores */
    h3 {
      font-size: 1.3rem; /* Ajusta o tamanho do título para telas menores */
    }
    p {
      font-size: 0.9rem; /* Ajusta o tamanho do parágrafo para telas menores */
    }
  }
`;


export const IconWrapper = styled.div`
  svg {
    color: #4c9f3d; 
  }
`;
