function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 24) {
    return { valido: false, texto: "Senha deve ter entre 4 e 24 caracteres." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarNome(nome) {
  if (nome.length < 3 || nome.length > 24) {
    return { valido: false, texto: "Nome deve ter entre 3 e 24 caracteres." };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarNome, validarSenha };

