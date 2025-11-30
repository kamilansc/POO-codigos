"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q2_calculadora_1 = require("./Q2_calculadora");
class calculadoraCientifica extends Q2_calculadora_1.Calculadora {
    constructor(operando1, operando2) {
        super(operando1, operando2);
    }
    exponenciar() {
        return this.operando1 ** this.operando2;
    }
}
let CalculadoraCientifica = new calculadoraCientifica(6, 2);
console.log(CalculadoraCientifica.exponenciar());
