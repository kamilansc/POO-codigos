export default class Conta {
    id: number;
    numero: string;
    saldo: number;

    constructor(id: number, numero: string, saldo: number) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        
        return false
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number) {
        if (this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }

    toJSON(): any{
        return {
            id: this.id,
            numero: this.numero,
            saldo: this.saldo
        };
    }
}