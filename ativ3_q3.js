"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listarNumeros(numeros) {
    let resultado = "";
    numeros.forEach((num, index) => {
        if (index === 0) {
            resultado += num;
        }
        else {
            resultado += " - " + num;
        }
    });
    return resultado;
}
console.log(listarNumeros([1, 10, 14, 25]));
