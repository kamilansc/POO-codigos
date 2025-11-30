"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Q4_conta_1 = __importDefault(require("./Q4_conta"));
class ContaImposto extends Q4_conta_1.default {
    _taxaDesconto;
    constructor(numero, saldo, taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    //reescrevi o método modificando seu comportamento 
    sacar(valor) {
        let desconto = this.saldo * this._taxaDesconto / 100;
        let total = valor + desconto;
        super.sacar(total);
    }
}
exports.default = ContaImposto;
