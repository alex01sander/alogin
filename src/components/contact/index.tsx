import React from 'react';
import { Container, Form, Input, TextArea, Button } from './styles';

const Contact = () => (
  <Container id="contact">
    <h2>Entre em Contato</h2>
    <Form>
      <Input type="text" placeholder="Seu Nome" />
      <Input type="email" placeholder="Seu Email" />
      <TextArea placeholder="Sua Mensagem" />
      <Button>Enviar Mensagem</Button>
    </Form>
  </Container>
);

export default Contact;
