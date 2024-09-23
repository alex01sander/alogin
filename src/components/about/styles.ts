import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 50px;

  strong {
    font-weight: 700;
    color: #000;
  }
`;

export const BenefitSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  justify-content: space-between;
  padding: 20px;
  /* border: 1px solid #ddd; */
  border-radius: 8px;
  /* background-color: #f9f9f9; */
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  color: #000;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BenefitText = styled.div`
  flex: 1;
  text-align: left;
`;

export const BenefitTitle = styled.h2`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-weight: 400;
`;
