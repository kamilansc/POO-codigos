import PromptSync from 'prompt-sync';
import { Cliente } from './cliente.js';
const prompt = PromptSync();
export class Conta {
    id;
    numero;
    cliente;
    dataAbertura;
    saldo;
    constructor(id, cliente, numero, dataAbertura, saldo) {
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
