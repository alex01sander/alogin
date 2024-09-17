import React from 'react';
import { Container, ServiceList, ServiceItem } from './styles';
import { FaLaptop, FaMobileAlt, FaCloud } from 'react-icons/fa';

const Services = () => (
  <Container>
    <h2>Nossos Serviços</h2>
    <ServiceList>
      <ServiceItem>
        <FaLaptop size={50} />
        <h3>Desenvolvimento Web</h3>
      </ServiceItem>
      <ServiceItem>
        <FaMobileAlt size={50} />
        <h3>Aplicativos Móveis</h3>
      </ServiceItem>
      <ServiceItem>
        <FaCloud size={50} />
        <h3>Soluções em Nuvem</h3>
      </ServiceItem>
    </ServiceList>
  </Container>
);

export default Services;
