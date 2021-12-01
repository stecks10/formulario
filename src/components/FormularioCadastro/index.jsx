import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

export function FormularioCadastro() {
  let nome = 'Vt';
  state = {};

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nome);
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          nome = e.target.value;
          if (nome.length > 3) {
            nome = nome.substr(0, 3);
          }
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="Promoções" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="Promoções" defaultChecked color="primary" />}
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
