class Cliente {
    id: number;
    nome: string;
    cpf: string;
    
    constructor(id: number, nome: string, cpf:string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }
}


class Conta{
    id: number;
    numero: string;
    saldo: number;
    cliente: Cliente;
    dataAbertura: Date;

    constructor(id: number, numero: string, saldoInicial: number, cliente: Cliente, dataAbertura: Date){
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
        this.cliente = cliente;
        this.dataAbertura = dataAbertura;
    }

    depositar (valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar (valor: number): void {
        this.saldo -= valor
    }

    transferir(contaDestino: Conta, valor: number){
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    consultarSaldo(): number{
        return this.saldo;
    }
} 


class Banco {
    contas: Conta[] = [];
    
    inserir (conta: Conta): void {
        this.contas.push(conta)
    }
    

    consultarPorNumero (numeroConta: string): Conta {
        let contaProcurada !: Conta;
        
        for (let i = 0; i<this.contas.length; i++) {
            if (this.contas[i]!.numero == numeroConta) {
                contaProcurada!= this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    

    alterar(conta: Conta): void {
        let contaProcurada!: Conta;
        contaProcurada = this.consultarPorNumero(conta.numero);

        if (contaProcurada) {
            contaProcurada.cliente = conta.cliente;
            contaProcurada.dataAbertura = conta.dataAbertura;
            contaProcurada.saldo = conta.saldo;
        }
    }


    excluir (numeroConta: string) {
        let indiceConta = this.contas.findIndex(c => c.numero == numeroConta);

        if (indiceConta>0) {
            this.contas.splice(indiceConta, 1);
        }
    }


    depositar (numeroConta: string, valor: number) {
        let conta !: Conta;
        conta = this.consultarPorNumero(numeroConta);

        if (conta) {
            conta.depositar(valor);
        }
    }
}

let contas: Conta[] = [];

let conta1 = new Conta(1, "111-1", 100, new Cliente(1, 'Ely', '825'), new Date());
contas[0] = conta1;

let conta2 = new Conta(2, "222-2", 200, new Cliente(2, "Maria", '222'), new Date());
conta1.transferir(conta2, 10);

// contas.push(new Conta(3, '333-3', 300));

console.log(contas);

/*
    CRUD - Creat(inserir), Read (consultar),
    Update (atualizar) e Delete(excluir)
*/

let banco: Banco = new Banco();

banco.inserir(conta1);
banco.inserir(conta2);

console.log(banco.consultarPorNumero('111-1'));
// console.log(banco.consultarPorNumero('555-5'));
