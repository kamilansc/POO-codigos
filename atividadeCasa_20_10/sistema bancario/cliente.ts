import promptSync from 'prompt-sync';
const prompt = promptSync();
import {Conta} from './conta.js';

export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    private constructor (id: number, nome: string, cpf: string, dataNascimento: Date, contas: Conta[] = []) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = contas;
    }

    static criarCliente(): Cliente {
        const id = parseInt(prompt('Digite o id do cliente: '));
        const nome = prompt('Digite o nome do cliente: ');
        const cpf = prompt('Digite o CPF do cliente: ');
        const dataEntrada = prompt('Digite a data de nascimento do cliente (aaaa-mm-dd): ');
        const dataNascimento = new Date(dataEntrada);
        const contas: Conta[] = [];
        return new Cliente(id, nome, cpf, dataNascimento, contas);
    }
}