import React from 'react';
import { FormularioCadastro } from './components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

import { validarCPF, validarSenha } from './models/cadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario Cadastro
      </Typography>
      <FormularioCadastro
        onSubmit={onSubmitForm}
        validacoes={{ cpf: validarCPF, senha: validarSenha }}
      />
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log(dados);
}

export default App;
