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

class Conta {
    id: number;
    numero: string;
    cliente: Cliente;
    dataAbertura: Date;
    saldo: number;

    constructor(id: number, numero: string, cliente: Cliente, 
        dataAbertura: Date,
        saldoInicial: number) {
        this.id = id;
        this.numero = numero;
        this.cliente = cliente;
        this.dataAbertura = dataAbertura;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void { this.saldo = this.saldo + valor; }

    sacar(valor: number): void { this.saldo = this.saldo - valor; }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor)
        contaDestino.depositar(valor);
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

let contas: Conta[] = [];

let conta1 = new Conta(1, '111-1', new Cliente(1, 'Ely', '825'), new Date(), 100);
contas[0] = conta1;

let conta2 = new Conta(2, '222-2', new Cliente(2, 'Maria', '222'), new Date(), 200);
contas.push(conta2);

//contas.push( new Conta(3, '333-3', 300));

console.log(contas);
console.log(contas[0].numero);
console.log(contas[3]);

/* 
    CRUD - Create (inserir), Read (consultar), 
           Update (atualizar) e Delete (excluir)
*/           

class Banco {
    contas: Conta[] = [];
    
    inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    consultarPorNumero(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
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

    excluir(numero: string): void {
        let indice = this.contas.findIndex(c => c.numero == numero);

        if (indice >= 0) {
            this.contas.splice(indice,1);
        }
    } 

    depositar(numero: string, valor: number): void {
        let conta!: Conta;
        conta = this.consultarPorNumero(numero);

        if (conta) {
            conta.depositar(valor);
        }
    }
}


let banco: Banco = new Banco();

banco.inserir(conta1);
banco.inserir(conta2);


//console.log(banco.consultarPorNumero('555-5'));

let cliente: Cliente = new Cliente(5, "pedro", "888");
let conta4: Conta = new Conta(1, '111-1', cliente, new Date(), 100000);

console.log(banco.consultarPorNumero('111-1'));
banco.alterar(conta4);
let contaX = banco.consultarPorNumero('111-1')
console.log(contaX);
console.log(contaX.cliente);
let conta5 = new Conta(5, "555-5", new Cliente(5, 'Joana', '578'), new Date(), 5000);
banco.inserir(conta5);

console.log(banco.consultarPorNumero('555-5'));
banco.excluir('111-1')
console.log(banco.contas);

banco.depositar('555-5', 60000);
console.log(banco.consultarPorNumero('555-5').consultarSaldo());