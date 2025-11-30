import PromptSync from 'prompt-sync';
import {Cliente} from './cliente.js'

const prompt = PromptSync();

export class Conta {
    id: number;
    numero: string;
    cliente: Cliente;
    dataAbertura: Date;
    saldo: number;

    constructor (id: number, cliente: Cliente, numero: string, dataAbertura: Date, saldo: number) {
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }
}