import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #000;
  perspective: 1000px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
  }

  @media (min-width: 1024px) {
    padding: 0 100px;
  }

  .movable-image {
    width: 80%;
    transition: transform 0.1s ease-out;
    transform-style: preserve-3d;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

export const Graphic = styled.div`
  width: 60%;
  height: 60%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent);
  border-radius: 50%;
  animation: ${glowAnimation} 5s ease-in-out infinite;
  filter: blur(5px);

  @media (min-width: 768px) {
    width: 50%;
    height: 50%;
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 40%;
  }
`;

export const TextContent = styled.div`
  max-width: 90%;
  color: #fff;
  text-align: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    text-align: left;
    max-width: 500px;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }

  @media (min-width: 768px) {
    padding: 15px 30px;
    font-size: 1.1rem;
  }
`;
