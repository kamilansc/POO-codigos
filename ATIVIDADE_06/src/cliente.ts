import Conta from "./conta.js";

export default class Cliente {
    private _id: number;
    private _nome: string;
    private _cpf: string;
    private _dataNascimento: Date;
    private _contas: Conta[] = [];

    constructor(id: number, nome: string, cpf:string, dataNascimento: Date) {
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
    }


    set id(novoId: number) {
        this._id = novoId;
    }


    get cpf(): string {
        return this._cpf;
    }

    get contas(): Conta[] {
        return this._contas;
    }


    public adicionarConta(conta: Conta): void {
        this._contas.push(conta);
    }


    exibirCliente(): void {
        console.log(`\tId: ${this._id},
        CPF: ${this._cpf},
        Nome: ${this._nome},
        Data de nascimento: ${this._dataNascimento},
        Contas: ${this._contas}
        `)
    }
}