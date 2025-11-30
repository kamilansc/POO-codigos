"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Q7_classseFuncionario_1 = __importDefault(require("./Q7_classseFuncionario"));
class Professor extends Q7_classseFuncionario_1.default {
    _titulacao;
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
exports.default = Professor;
if (require.main === module) {
    let professor1 = new Professor("Maria Caroline", "Pereira", "1", 1000, "Doutorado");
    console.log(professor1.calcularSalarioPrimeiraParcela());
    console.log(professor1.calcularSalarioSegundaParcela());
}
