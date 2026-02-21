import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ValidacoesCadastroContext from "./contexts/ValidacoesCadastro";
import { validarCPF, validarNome, validarSenha } from "./models/cadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastroContext.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastroContext.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
