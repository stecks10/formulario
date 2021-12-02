import React from 'react';
import { FormularioCadastro } from './components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario Cadastro
      </Typography>
      <FormularioCadastro onSubmit={onSubmitForm} validarCPF={validarCPF} />
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 digitos.' };
  } else {
    return { valido: true, texto: '' };
  }
}

export default App;
