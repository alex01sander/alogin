import styled from "styled-components";
interface HeaderProps {
  backgroundImage: string;
}

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  
  color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  position: fixed; /* Adicionado para fixar o cabeçalho na tela */
  top: 0; /* Mantém o cabeçalho no topo da página */
  width: 100%; /* Faz o cabeçalho ocupar toda a largura da tela */
  z-index: 1000; /* Garante que o cabeçalho esteja acima de outros elementos */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
  }
`;

export const Logo = styled.div<HeaderProps>`
  width:50px;
  height: 50px; /* Define uma altura para que a imagem tenha um tamanho visível */
  background: url(${props => props.backgroundImage}) no-repeat center center; /* Garante que a imagem seja centralizada */
  background-size: cover; /* Faz a imagem preencher o espaço corretamente */
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;


export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #00FF88;
  }
`;
