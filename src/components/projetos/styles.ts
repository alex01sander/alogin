import styled from 'styled-components';


interface ProjetosImageProps {
  zoomed: boolean;
}

export const ProjetoText = styled.div`
  margin-top: 30px;
`

export const ProjetoTitle = styled.h1`
  text-align: center;

`

export const Description = styled.p`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: auto;
  gap: 1rem;
  margin: 0 auto; 

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 1.5rem;
    padding: 1rem;
  }
`;


export const ProjetosCard = styled.div`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    max-width: 90%; 
  }
`;


export const ProjetosImage = styled.img<ProjetosImageProps>`
  width: 100%;
  height: auto;
  object-fit: contain; 
  border-radius: 15px;
  margin-bottom: 1rem;
  cursor: pointer; 
  transition: transform 0.3s ease; 

  ${({ zoomed }) =>
    zoomed &&
    `
    transform: scale(1.5); /* Aplica zoom quando a imagem é clicada */
    z-index: 10;
  `}

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
