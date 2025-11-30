"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Q6_classePessoa_1 = __importDefault(require("./Q6_classePessoa"));
const Q7_classseFuncionario_1 = __importDefault(require("./Q7_classseFuncionario"));
const Q8_classeProfessor_1 = __importDefault(require("./Q8_classeProfessor"));
class folhaPagamentos {
    _pessoas;
    constructor(pessoas) {
        this._pessoas = pessoas;
    }
    calcularPagamentos() {
        let totalSalario = 0;
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Q7_classseFuncionario_1.default || pessoa instanceof Q8_classeProfessor_1.default) {
                totalSalario += pessoa.salario;
            }
        }
        return totalSalario;
    }
}
;
class geradorDeDados {
    static gerarPessoas() {
        let pessoas = [];
        let professor1 = new Q8_classeProfessor_1.default("Maria Caroline", "Pereira", "1", 1000, "Doutorado");
        let professor2 = new Q8_classeProfessor_1.default("Lívia", "Cunha", "2", 2000, "Pós-Doutorado");
        let professor3 = new Q8_classeProfessor_1.default("Mariana", "Louise", "3", 2500, "Doutorado");
        let funcionario1 = new Q7_classseFuncionario_1.default("Mariane", "Batista", "4", 5000);
        let pessoa1 = new Q6_classePessoa_1.default("Lula", "Inácio");
        pessoas.push(professor1, professor2, professor3, funcionario1, pessoa1);
        return pessoas;
    }
}
let pessoas = geradorDeDados.gerarPessoas();
let folhaPag = new folhaPagamentos(pessoas);
console.log(folhaPag);
console.log("Valor total dos salários: R$", folhaPag.calcularPagamentos());
