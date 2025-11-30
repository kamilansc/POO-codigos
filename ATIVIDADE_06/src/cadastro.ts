import Banco from "./banco.js";
import Cliente from "./cliente.js";
import Conta from "./conta.js";
import { receberNumero, inicializarClientes, inicializarContas } from "./utils.js";

import prompt from "prompt-sync";
let input = prompt();

export default class Cadastro {
    public static cadastrarCliente(clientes: Cliente[]): Cliente {
        console.log("\n----CADASTRAR CLIENTE----");

        let idCliente: number = this.definirId(clientes);
        let CPF: string = input("\nDigite o CPF: ");
        let nome: string = input("Digite o nome: ");
        let dataNascimento: Date = new Date(input("Digite a data de nascimento (formato: aaaa-mm-dd): "));

        console.log("\nCliente cadastrado com sucesso!")
        return new Cliente(idCliente, nome, CPF, dataNascimento);
    }


    private static definirId(lista: Cliente[] | Conta[]) {
        let ultimoId: number = lista.at(lista.length-1)?.id ?? 1;
        let novoId: number = ultimoId + 1;
        return novoId;
    }


    public static criarConta(contas: Conta[], cliente: Cliente){
        let id: number = this.definirId(contas);
        let numero: string = this.receberNumeroContaValido(contas);
        let saldo: number = receberNumero("\nDigite o saldo inicial: ")

        return new Conta(id, numero, saldo, cliente);
    }


    private static receberNumeroContaValido(contas: Conta[]){
        let numero: string;
        let numeroJaExiste;
        do {
            numero = input("Digite o número da conta: ");
            numeroJaExiste = contas.find(conta => conta.numero == numero)
    
            if (numeroJaExiste) {
                console.log("Número já vinculado com outra conta. Tente novamente!");
            }
        }while(numeroJaExiste === undefined);

        return numero;
    }
}

let banco: Banco = new Banco();
let clientes: Cliente[] = inicializarClientes();
inicializarContas(clientes);
banco.listarClientes();


 