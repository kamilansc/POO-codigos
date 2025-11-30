import Pessoa from "./Q6_classePessoa";
import Funcionario from "./Q7_classseFuncionario";
import Professor from "./Q8_classeProfessor";

class folhaPagamentos{
    private _pessoas: Pessoa[];

    constructor(pessoas: Pessoa[]) {
        this._pessoas = pessoas;
    }

    calcularPagamentos(): number{
        let totalSalario = 0;
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario || pessoa instanceof Professor) {
                totalSalario += pessoa.salario;
            }
        }

        return totalSalario;
    }
};

class geradorDeDados {
    static gerarPessoas(): Pessoa[] {
        let pessoas: Pessoa[] = [];

        let professor1: Professor = new Professor("Maria Caroline", "Pereira", "1", 1000, "Doutorado");
        let professor2: Professor = new Professor("Lívia", "Cunha", "2", 2000, "Pós-Doutorado");
        let professor3: Professor = new Professor("Mariana", "Louise", "3", 2500, "Doutorado");
        let funcionario1: Funcionario = new Funcionario ("Mariane", "Batista", "4", 5000);
        let pessoa1: Pessoa = new Pessoa("Lula", "Inácio");

        pessoas.push(professor1, professor2, professor3, funcionario1, pessoa1);

        return pessoas;
    }
}
let pessoas = geradorDeDados.gerarPessoas();
let folhaPag = new folhaPagamentos(pessoas);
console.log(folhaPag);
console.log("Valor total dos salários: R$", folhaPag.calcularPagamentos());