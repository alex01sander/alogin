import React, { useState } from 'react';
import {
  Container,
  Graphic,
  TextContent,
  Title,
  Paragraph,
  Button
} from './styles'; 
import interative from '../../assets/Design sem nome (1).png'

const Responsive = () => {

    
  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });

  
  const handleMouseMove = (event: any) => {
    
    const { clientWidth, clientHeight } = event.currentTarget;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    
    const rotateY = (mouseX / clientWidth - 0.5) * 30; 
    const rotateX = (mouseY / clientHeight - 0.5) * -30; 

    
    setRotate({ rotateX, rotateY });
  };

return(
    <Container onMouseMove={handleMouseMove}>
        <img src={interative} alt="interative"  className="movable-image"
        style={{
          transform: `rotateX(${rotate.rotateX}deg) rotateY(${rotate.rotateY}deg)`,
        }}/>
        <TextContent>
        <Title>Experiências que Conectam!</Title>
        <Paragraph>
        Desenvolvemos soluções de (UX) que colocam o usuário no foco, com design inteligente e interfaces intuitivas. 
        Garantimos interações agradáveis e eficientes, criando uma jornada envolvente que maximiza o valor do seu produto ou serviço.
        </Paragraph>
        <Button>Falar com um especialista →</Button>
        </TextContent>
  </Container>
)
    
 
};

export default Responsive;
