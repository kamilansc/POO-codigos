import Cliente from "./cliente.js";
import Conta from "./conta.js";

import prompt from "prompt-sync";
let input = prompt();


export function msgSucesso(): void {
    console.log("Operação executada com sucesso!");
}


export function receberNumero(texto: string): number {
    let numero: number = parseFloat(input(texto));

    while (Number.isNaN(numero)) {
        console.log("Entrada inválida. Digite um valor numérico.");
        numero = parseFloat(input(texto));
    }
    
    return numero;
}


export function inicializarClientes(): Cliente[] {
    let clientes: Cliente[] = [];

    let cliente1 = new Cliente(1, "Kamila Rocha", "023", new Date(2006, 3, 4));
    cliente1.adicionarConta(new Conta(1, "000", 20, cliente1));

    let cliente2 = new Cliente(2, "Vitória Barbosa", "012", new Date(2006, 11, 2));
    cliente2.adicionarConta(new Conta(2, "111", 20, cliente2));

    let cliente3 = new Cliente(3, "Mylena Duarte", "456", new Date(2006, 11, 2));
    cliente3.adicionarConta(new Conta(3, "444", 20, cliente3));

    clientes.push(cliente1, cliente2, cliente3);
    return clientes;
}


export function inicializarContas(clientes: Cliente[]): Conta[] {
    let contas: Conta[] = [];

    for (let cliente of clientes) {
        let conta = cliente.contas.at(0);

        if (conta) {
            contas.push(conta);
        }
    }

    return contas;
}