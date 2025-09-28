"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function imprimirSaudacao(nome, pronomeTratamento = "Sr(a).") {
    return pronomeTratamento + " " + nome;
}
let saudacao = imprimirSaudacao("Otávio", "Sr.");
console.log(saudacao);
