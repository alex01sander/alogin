import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5vw;
  color: white;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  z-index: -1; 
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 4rem); 
  font-weight: 700;
  color: #fff;
  z-index: 2;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9); 
  margin-bottom: 2vh; 
  max-width: 60ch; 
`;

export const SubTitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem); 
  font-weight: 400;
  color: #fff;
  z-index: 2;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9); 
  margin-bottom: 3vh; 
  max-width: 60ch; 
  line-height: 1.6;
`;

export const TextContainer = styled.div`
  z-index: 2;
  background: rgba(0, 0, 0, 0.5); 
  padding: 2vh 2vw; 
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5); 
  max-width: 100%;
`;

export const Button = styled.a`
    display: inline-block;
  padding: clamp(10px, 2vh, 15px) clamp(20px, 5vw, 30px); 
  border: none;
  background-color: #25d366; 
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 1.1rem); 
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #128c7e; 
  }
`;
