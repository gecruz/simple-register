import { useState } from "react";

function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial);

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

    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
    return Object.keys(validacoes).reduce((acc, campo) => {
        acc[campo] = { valido: true, texto: "" };
        return acc;
    }, {});
}

export default useErros;