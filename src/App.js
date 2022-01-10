import React from 'react';
import { FormularioCadastro } from './components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

import { validarCPF, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './context/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
      >
        <FormularioCadastro onSubmit={onSubmitForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log(dados);
}

export default App;
