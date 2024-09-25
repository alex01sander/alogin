import React, { useState } from 'react';
import {
  ProjetosContainer,
  ProjetosCard,
  ProjetosImage,
  Description,
  ProjetoText,
  ProjetoTitle,
} from './styles'; // Importa os styled-components

import game from '../../assets/Design sem nome (11).png';
import pet from '../../assets/Design sem nome (13).png';
import psico from '../../assets/Design sem nome (12).png';

const Projetos = () => {
  // Estado para controlar qual imagem está com zoom
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Função para alternar o estado de zoom
  const handleZoom = (imageSrc: string) => {
    if (zoomedImage === imageSrc) {
      setZoomedImage(null); // Remove o zoom se a mesma imagem for clicada novamente
    } else {
      setZoomedImage(imageSrc); // Ativa o zoom na imagem clicada
    }
  };

  return (
    <>
      <ProjetoText id='projetos'>
          <ProjetoTitle>Landing Pages Poderosas para Aumentar Suas Conversões</ProjetoTitle>
          <Description>Desenvolvemos landing pages focadas em resultados, projetadas para captar leads e impulsionar suas vendas de forma eficaz e rápida.</Description>
      </ProjetoText>
      <ProjetosContainer>
        <ProjetosCard>
          <ProjetosImage
            src={game}
            alt="Projeto 1"
            zoomed={zoomedImage === game} 
            onClick={() => handleZoom(game)} 
          />
        </ProjetosCard>

        <ProjetosCard>
          <ProjetosImage
            src={psico}
            alt="Projeto 2"
            zoomed={zoomedImage === psico} 
            onClick={() => handleZoom(psico)} 
          />
        </ProjetosCard>

        <ProjetosCard>
          <ProjetosImage
            src={pet}
            alt="Projeto 3"
            zoomed={zoomedImage === pet} 
            onClick={() => handleZoom(pet)} 
          />
        </ProjetosCard>
      </ProjetosContainer>
    </>
  );
};

export default Projetos;
