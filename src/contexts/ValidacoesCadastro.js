import React from "react";

const ValidacoesCadastroContext = React.createContext({
  cpf: { valido: true, texto: "" },
  nome: { valido: true, texto: "" },
  senha: { valido: true, texto: "" },
});

export default ValidacoesCadastroContext;
