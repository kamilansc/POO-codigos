class Conta {
    id: number;
    numero: string;
    saldo: number;

    constructor(id: number, numero: string, 
                saldoInicial: number) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

