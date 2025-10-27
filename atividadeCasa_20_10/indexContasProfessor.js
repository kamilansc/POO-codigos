"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    id;
    nome;
    cpf;
    constructor(id, nome, cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }
}
class Conta {
    id;
    numero;
    cliente;
    dataAbertura;
    saldo;
    constructor(id, numero, cliente, dataAbertura, saldoInicial) {
        this.id = id;
        this.numero = numero;
        this.cliente = cliente;
        this.dataAbertura = dataAbertura;
        this.saldo = saldoInicial;
    }
    depositar(valor) { this.saldo = this.saldo + valor; }
    sacar(valor) { this.saldo = this.saldo - valor; }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    consultarSaldo() {
        return this.saldo;
    }
}
let contas = [];
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
    contas = [];
    inserir(conta) {
        this.contas.push(conta);
    }
    consultarPorNumero(numero) {
        let contaProcurada;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    alterar(conta) {
        let contaProcurada;
        contaProcurada = this.consultarPorNumero(conta.numero);
        if (contaProcurada) {
            contaProcurada.cliente = conta.cliente;
            contaProcurada.dataAbertura = conta.dataAbertura;
            contaProcurada.saldo = conta.saldo;
        }
    }
}
let banco = new Banco();
banco.inserir(conta1);
banco.inserir(conta2);
//console.log(banco.consultarPorNumero('555-5'));
let cliente = new Cliente(5, "pedro", "888");
let conta4 = new Conta(1, '111-1', cliente, new Date(), 100000);
console.log(banco.consultarPorNumero('111-1'));
banco.alterar(conta4);
let contaX = banco.consultarPorNumero('111-1');
console.log(contaX);
console.log(contaX.cliente);
