import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <form
      aoEnviar={(e) => {
        e.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        }}
        id="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={endereco}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(e) => {
          setNumero(e.target.value);
        }}
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={estado}
        onChange={(e) => {
          setEstado(e.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}
