import styled from 'styled-components';

// Definir o tipo das propriedades do componente ProjetosImage
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
  margin: 0 auto; /* Centraliza o container na tela */

  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas pequenas */
    gap: 1.5rem;
    padding: 1rem;
  }
`;

// Estilo para cada cartão de projeto
export const ProjetosCard = styled.div`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    max-width: 90%; /* Reduz o tamanho dos cartões em telas menores */
  }
`;

// Imagem dentro do cartão com efeito de zoom ao clicar
export const ProjetosImage = styled.img<ProjetosImageProps>`
  width: 100%;
  height: auto;
  object-fit: contain; /* Mantém a proporção correta */
  border-radius: 15px;
  margin-bottom: 1rem;
  cursor: pointer; /* O cursor se torna um ponteiro quando passa sobre a imagem */
  transition: transform 0.3s ease; /* Transição suave para o zoom */

  ${({ zoomed }) =>
    zoomed &&
    `
    transform: scale(1.5); /* Aplica zoom quando a imagem é clicada */
    z-index: 10;
  `}

  @media (max-width: 768px) {
    max-width: 100%; /* Garante que a imagem ocupe todo o cartão em telas pequenas */
  }
`;
