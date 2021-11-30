import React from 'react';
import { FormularioCadastro } from './components/FormularioCadastro';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <h1>Formulario Cadastro</h1>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
