"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    _operando1;
    _operando2;
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
}
exports.Calculadora = Calculadora;
if (require.main === module) {
    let calculadora = new Calculadora(5, 7);
    console.log(calculadora.somar());
}
