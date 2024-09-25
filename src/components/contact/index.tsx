import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Container, Form, Input, TextArea, Button, SocialLinks, Wrapper, SuccessMessage, ErrorMessage } from './styles';

const Contact = () => {
  const [status, setStatus] = useState({ message: '', success: false });

  const sendEmail = (e: any) => {
    e.preventDefault(); 

    emailjs.sendForm('service_mumxufw', 'template_tv6ji8a', e.target, 'O-jKQCDhVpCc1c6ga')
      .then((result) => {
        setStatus({ message: 'Mensagem enviada com sucesso!', success: true });
      }, (error) => {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente mais tarde.', success: false });
      });

    e.target.reset(); 
  };

  return (
    <Container id="contato">
      <h2>Entre em Contato</h2>
      <Wrapper>
        
          <Form onSubmit={sendEmail}>
            <Input type="text" name="user_name" placeholder="Seu Nome" required />
            <Input type="email" name="user_email" placeholder="Seu Email" required />
            <TextArea name="message" placeholder="Sua Mensagem" required />
            <Button type="submit">Enviar Mensagem</Button>
            {status.message && (
            status.success ? <SuccessMessage>{status.message}</SuccessMessage> : <ErrorMessage>{status.message}</ErrorMessage>
          )}
          </Form>

          
          
       

        <SocialLinks>
          <p>Rede Sociais:</p>
          <a href="https://www.instagram.com/_alogin/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> _Alogin
          </a>
          <a href="https://wa.me/5551992401184" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> (51) 99240-1184
          </a>
          <a href="mailto:suporte@alogin.com.br">
            <FaEnvelope /> suporte@alogin.com.br
          </a>
        </SocialLinks>
      </Wrapper>
    </Container>
  );
};

export default Contact;
