import React from "react";

const ValidacoesCadastroContext = React.createContext({
  cpf: semValidacao,
  nome: semValidacao,
  senha: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}

export default ValidacoesCadastroContext;
