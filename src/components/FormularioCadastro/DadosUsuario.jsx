import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";

import ValidacoesCadastroContext from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    senha: { valido: true, texto: "" },
  });

  const validacoes = useContext(ValidacoesCadastroContext);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoErro = validacoes[name](value);
    setErros({ ...erros, [name]: novoErro });
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        required
        fullWidth
        id="email"
        name="email"
        type="email"
        label="Email"
        margin="normal"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        required
        fullWidth
        id="senha"
        name="senha"
        type="password"
        label="Senha"
        margin="normal"
        variant="outlined"
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onChange={(event) => {
          setSenha(event.target.value);
          validarCampos(event);
        }}
        onBlur={(event) => validarCampos(event)}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
