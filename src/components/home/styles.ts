import styled from 'styled-components';

interface HomeProps {
  backgroundImage: string;
}

export const Container = styled.section<HomeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 105vh;
  background-color: #f8f9fa;
  padding: 20px;
  background: url(${props => props.backgroundImage}) no-repeat center center/cover fixed;
  text-align: center;
`;


export const Title = styled.h1`
  font-size: 3rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #00FF88;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
