"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Q6_classePessoa_1 = __importDefault(require("./Q6_classePessoa"));
class Funcionario extends Q6_classePessoa_1.default {
    _matricula;
    _salario;
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = this.validarSalario(salario);
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    validarSalario(salario) {
        if (salario < 0) {
            salario = 0;
        }
        return salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this._salario * 0.6;
    }
    calcularSalarioSegundaParcela() {
        return this._salario * 0.4;
    }
}
exports.default = Funcionario;
