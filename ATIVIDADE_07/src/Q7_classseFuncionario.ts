import Pessoa from "./Q6_classePessoa";

export default class Funcionario extends Pessoa {
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
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

    validarSalario(salario: number): number {
        if (salario < 0) {
            salario = 0;
        }
        return salario;
    }

    calcularSalarioPrimeiraParcela(): number {
        return this._salario * 0.6
    }

    calcularSalarioSegundaParcela(): number {
        return this._salario * 0.4;
    }
}