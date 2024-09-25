import styled from 'styled-components';

export const Container = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9; /* Cor de fundo mais suave */
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil para dar profundidade */
  border-radius: 10px; /* Bordas arredondadas para suavizar o visual */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  width: 100%;
  background: white; /* Fundo branco para o formulário */
  padding: 20px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidade */
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4A90E2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5); /* Sombra ao focar */
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4A90E2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #4A90E2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #357ABD;
    transform: translateY(-2px); /* Levanta o botão ao passar o mouse */
  }

  &:active {
    transform: translateY(1px); /* Leve movimento ao clicar */
  }
`;

export const SocialLinks = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: left;

  p {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #333; /* Cor mais escura para destaque */
  }

  a {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 18px;
    color: #2a2a2a;
    text-decoration: none;
    transition: color 0.3s ease;

    svg {
      margin-right: 10px;
      font-size: 1.5rem;
    }

    &:hover {
      color: #375b2e;
    }
  }
`;


