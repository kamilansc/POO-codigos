import Cliente from "./cliente.js";

export default class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;
    private _cliente: Cliente;
    private _dataDeAbertura: Date;

    constructor(id: number, numero: string, saldo: number, cliente: Cliente) {
        this._id = id;
        this._numero = numero;
        this._saldo = saldo;
        this._dataDeAbertura = new Date();
        this._cliente = cliente;
    }

    get id(): number {
        return this._id;
    }

    get numero(): string {
        return this._numero;
    }

    get cliente(): Cliente {
        return this._cliente;
    }


    set cliente(novoCliente) {
        this._cliente = novoCliente;
    }


    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    consultarSaldo(): number {
        return this._saldo
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}