"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Q4_conta_1 = __importDefault(require("./Q4_conta"));
class Poupanca extends Q4_conta_1.default {
    _taxaJuros;
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    renderJuros() {
        let juros = this.saldo * this._taxaJuros / 100;
        this.depositar(juros);
    }
}
exports.default = Poupanca;
