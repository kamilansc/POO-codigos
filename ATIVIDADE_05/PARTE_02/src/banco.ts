import PromptSync from "prompt-sync";
const prompt = PromptSync();
import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";

export class Banco {
    clientes: Cliente[];
    contas: Conta[];

    constructor (clientes: Cliente[] = [], contas: Conta[] = []) {
        this.clientes = clientes;
        this.contas = contas;
    }

    inserirCliente (): void {
        const cliente = Cliente.criarCliente()

        const clienteComMesmoCpf = this.consultarCliente(cliente.cpf);
        const clienteComMesmoId = this.clientes.find(c => c.id === cliente.id);
        
        if (clienteComMesmoCpf == null && clienteComMesmoId == null) {
            this.clientes.push(cliente);
        }
    }

    inserirConta (): void {
        const id = parseInt(prompt("Digite o id da conta: "));
        const cpfCliente = prompt("Digite o CPF do titular: ");
        const numero = prompt("Digite o número da conta: ");
        const dataAbertura = new Date();
        const saldo = 0;
        
        const cliente = this.consultarCliente(cpfCliente);
        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        }
        
        const conta = new Conta(id, cliente, numero, dataAbertura, saldo);

        const contaComMesmoNumero = this.consultarConta(conta.numero);
        const contaComMesmoId = this.contas.find(c => c.id === conta.id);

        if (contaComMesmoNumero == null && contaComMesmoId == null) {
            this.contas.push(conta);
            //cliente.contas.push(conta) é preciso adicionar conta em cliente.contas[]
            console.log('Conta criada com sucesso!');
            return;
        }
        console.log('Não foi possível pois já existem dados semelhantes aos informados.')
    }

    consultarCliente (cpf: string): Cliente | null{
        for (let i = 0; i < this.clientes.length; i++) {
            const cliente = this.clientes[i];

            if (cliente && cliente.cpf == cpf) {
                return cliente;
            }
        }
        return null;
    }

    consultarConta (numeroConta: string): Conta | null {
        for (let i = 0; i < this.contas.length; i++) {
            const conta = this.contas[i];

            if (conta && conta.numero == numeroConta) {
                return conta;
            }
        }
        return null;
    }

    associarContaCliente (numeroConta: string, cpfCliente: string): void {
        const clienteProcurado = this.consultarCliente(cpfCliente);
        const contaProcurada = this.consultarConta(numeroConta);

        if (clienteProcurado == null || contaProcurada == null) {
            return;
        }

        if (contaProcurada.cliente && contaProcurada.cliente.cpf != cpfCliente)
            return;

        for (const contaAtual of clienteProcurado.contas) {
            if (contaAtual.numero == numeroConta) {
                return;
            }
        }

        clienteProcurado.contas.push(contaProcurada);
        contaProcurada.cliente = clienteProcurado;
    }

    listarContasCliente (cpf: string): Conta[] {
        const clienteProcurado = this.consultarCliente(cpf);
        
        if (clienteProcurado != null) {
            return clienteProcurado.contas;
        }

        return [];
    }

    totalizarSaldoCliente(cpf: string): number | null {
        const clienteProcurado = this.consultarCliente(cpf);

        if (clienteProcurado == null) {
            return null;
        }
        
        let saldo: number = 0;
        for (const conta of clienteProcurado.contas) {
            saldo += conta.saldo;
        }

        return saldo;
    }

    exluirConta(numero: string): void {
        let indice = this.contas.findIndex(c => c.numero == numero);

        if (indice > 0) {
            this.contas.splice(indice, 1);
            console.log("Conta excluída com sucesso!")
        }
    }

    atualizarConta(): void {

    }

    depositar(): void {
        const valor = parseFloat(prompt("Digite o valor do déposito: "));
        const numeroConta = prompt("Digite o número da conta destino: ");

        let conta!: Conta;
        conta = this.consultarConta(numeroConta);
        if (conta) {
            conta.depositar(valor);
            console.log("Valor depositado com sucesso!")
        }
    }
}