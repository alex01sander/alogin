import styled from 'styled-components';

export const Container = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f8f9fa;
`;

export const ServiceList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ServiceItem = styled.div`
  flex: 1;
  max-width: 250px;
  text-align: center;

  h3 {
    font-size: 1.2rem;
    margin-top: 10px;
  }

  svg {
    color: #4A90E2;
  }
`;
