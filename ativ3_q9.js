"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function escolheNome(nomes) {
    let tamanhoArray = nomes.length;
    let numAleatorio = Math.floor(Math.random() * tamanhoArray);
    return nomes[numAleatorio];
}
console.log(escolheNome(["kamila", "otavio", "arthur", "violeta", "Julia", "eduarda", "carol", "luana", "luiz", "lucas"]));
