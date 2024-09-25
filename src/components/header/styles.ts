import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  color: black;
  position: absolute; 
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.div<{ backgroundImage: string }>`
  width: 50px;
  height: 50px;
  background: url(${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; /* Esconde o menu em telas menores */
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
