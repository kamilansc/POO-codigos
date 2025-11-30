import Funcionario from "./Q7_classseFuncionario";

export default class Professor extends Funcionario{
    private _titulacao: string;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario;
    }

    calcularSalarioSegundaParcela(): number {
        return 0;
    }
}

if (require.main === module) {
    let professor1: Professor = new Professor("Maria Caroline", "Pereira", "1", 1000, "Doutorado");
    console.log((<Funcionario> professor1).calcularSalarioPrimeiraParcela());
    console.log(professor1.calcularSalarioSegundaParcela());
}