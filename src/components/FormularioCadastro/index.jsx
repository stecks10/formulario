import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

export function FormularioCadastro() {
  const [nome, setNome] = useState('');

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
          setNome(e.target.value);
          if (nome.length >= 3) {
            setNome(nome.substr(0, 3));
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
