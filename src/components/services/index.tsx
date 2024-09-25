import React from 'react';
import { Container, ServiceList, ServiceItem, IconWrapper } from './styles';
import { FaLaptop, FaMobileAlt, FaCloud, FaShopify, FaSearch, FaWordpress, FaUserTie, FaChalkboardTeacher, FaUsers, FaCog } from 'react-icons/fa';

const Services = () => (
  <Container id="serviços">
    <h2>Experiências digitais oferecidas</h2>
    <ServiceList>
      <ServiceItem>
        <IconWrapper>
          <FaMobileAlt size={50} />
        </IconWrapper>
        <h3>Consultoria e Planejamento</h3>
        <p>Análise de necessidades: Avaliação das metas do cliente, público-alvo e concorrência.</p>
      </ServiceItem>
      <ServiceItem>
        <IconWrapper>
          <FaLaptop size={50} />
        </IconWrapper>
        <h3>Desenvolvimento Front-End e Back-End</h3>
        <p>Desenvolvimento HTML/CSS/JavaScript: Programação das interfaces e animações do site.</p>
      </ServiceItem>
      <ServiceItem>
        <IconWrapper>
          <FaCloud size={50} />
        </IconWrapper>
        <h3>SEO (Otimização para Motores de Busca)</h3>
        <p>Otimização on-page: Melhoria de títulos, descrições, URLs, e otimização de imagens.
        Estrutura de URLs amigáveis: Configuração para facilitar a indexação por motores de busca.
        Análise de palavras-chave: Inclusão de termos relevantes para otimizar o posicionamento orgânico. </p>
      </ServiceItem>
      <ServiceItem>
        <IconWrapper>
          <FaShopify size={50} />
        </IconWrapper>
        <h3>Hospedagem e Domínios</h3>
        <p>Registro de domínios: Ajudar o cliente a registrar um domínio personalizado.
        Serviço de hospedagem: Oferecer opções de hospedagem otimizadas para a performance e segurança do site.
        </p>
      </ServiceItem>
      <ServiceItem>
        <IconWrapper>
          <FaSearch size={50} />
        </IconWrapper>
        <h3>Suporte Técnico</h3>
        <p>Estamos ao seu lado em todos os momentos, oferecendo suporte técnico contínuo, 24 horas por dia, 7 dias por semana. Seja para solucionar questões técnicas, 
          otimizar o desempenho do seu site ou oferecer orientações
           detalhadas, estamos sempre prontos para garantir que sua plataforma esteja funcionando perfeitamente e atendendo às suas necessidades..</p>
      </ServiceItem>
      <ServiceItem>
        <IconWrapper>
          <FaCog size={50} />
        </IconWrapper>
        <h3>Planos de Manutenção Sob Medida</h3>
        <p>Mantenha seu site sempre atualizado e seguro com nossos planos de manutenção personalizados. Cuidamos de atualizações, segurança, 
          ajustes de conteúdo e monitoramento 
          de performance, garantindo o pleno funcionamento do seu site enquanto você foca no crescimento do seu negócio.</p>
      </ServiceItem>
      
    </ServiceList>
  </Container>
);

export default Services;
