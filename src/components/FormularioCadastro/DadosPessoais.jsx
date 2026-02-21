import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastroContext from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar, anterior }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);

  const validacoes = useContext(ValidacoesCadastroContext);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        fullWidth
        required
        id="nome"
        name="nome"
        label="Nome"
        margin="normal"
        variant="outlined"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <TextField
        fullWidth
        required
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        margin="normal"
        variant="outlined"
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
      />
      <TextField
        fullWidth
        required
        id="cpf"
        name="cpf"
        label="CPF"
        margin="normal"
        variant="outlined"
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={(event) => validarCampos(event)}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            color="primary"
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
          />
        }
      />

      <Button variant="text" onClick={anterior}>
        Voltar
      </Button>
      <Button variant="contained" color="primary" onClick={aoEnviar}>
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
