import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega({ aoEnviar, anterior }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, cidade, estado });
      }}
    >
      <TextField
        required
        id="cep"
        name="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
        value={cep}
        onChange={(event) => setCep(event.target.value)}
      />
      <TextField
        required
        fullWidth
        id="endereco"
        name="endereco"
        label="Endereço"
        margin="normal"
        variant="outlined"
        value={endereco}
        onChange={(event) => setEndereco(event.target.value)}
      />
      <TextField
        required
        id="numero"
        name="numero"
        label="Número"
        type="number"
        margin="normal"
        variant="outlined"
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
      />
      <TextField
        required
        id="cidade"
        name="cidade"
        label="Cidade"
        margin="normal"
        variant="outlined"
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
      />
      <TextField
        required
        id="estado"
        name="estado"
        label="Estado"
        margin="normal"
        variant="outlined"
        value={estado}
        onChange={(event) => setEstado(event.target.value)}
      />
      <Button variant="text" onClick={anterior}>
        Voltar
      </Button>
      <Button variant="contained" color="primary" onClick={aoEnviar}>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
