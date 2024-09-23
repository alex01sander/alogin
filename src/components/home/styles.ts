import styled from 'styled-components';

interface HomeProps{
  backgroundImage: string;

}



export const Container = styled.div<HomeProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  z-index: 2;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  z-index: 2;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  font-size: 1.2rem;
  padding: 15px 30px;
  background-color: #00e6e6;
  color: #fff;
  border: none;
  border-radius: 50px;
  z-index: 2;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c2c2;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
