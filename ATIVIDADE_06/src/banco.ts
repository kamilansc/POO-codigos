import Cliente from "./cliente.js";
import Conta from "./conta.js";
import Cadastro from "./cadastro.js";
import prompt from "prompt-sync";

let input = prompt();

export default class Banco {
    private _clientes: Cliente[] = inicializarClientes();
    private _contas: Conta[] = inicializarContas(this._clientes);

    criarCliente(): Cliente {
        let cliente = Cadastro.cadastrarCliente(this._clientes);
        this._clientes.push(cliente);

        return cliente;
    }


    criarConta(): void {
        let opcao: number;
        let cliente: Cliente;
        do {
            opcao = receberNumero("\nJá é cliente do banco?\n(1 - Sim | 0 - Não): ");
            if (opcao != 1 && opcao != 0) {console.log("\nOpção inválida. Tente novamente.")};
        } while (opcao != 1 && opcao != 0);

        if (opcao === 1) {
            cliente = this.consultarClientePeloCPF();
        }
        else {
            cliente = this.criarCliente();
        }
        let conta = Cadastro.criarConta(this._contas, cliente)
        cliente.adicionarConta(conta);
        this._contas.push(conta);
    }


    consultarConta(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }


    private consultarContaPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluir(numero: string): void {
        let indiceProcurado: number = this.consultarContaPorIndice(numero);

        if (indiceProcurado != -1) {
            if (this.consultarConta(numero).cliente) {
                return;
            }

            for (let i = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }

    alterar(conta: Conta): void {
        let contaProcurada: Conta = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }


    consultarClientePeloCPF(): Cliente{
        let CPFCliente: string = input("\nDigite seu CPF: ");
        let clienteConsultado: Cliente | undefined = this._clientes.find(cliente => cliente.cpf == CPFCliente);
        
        if (clienteConsultado) {
            console.log(`\nCliente encontrado(a)!\n${clienteConsultado.exibirCliente()}`)
            return clienteConsultado;
        }

        console.log("\nCliente não encontrado. Tente novamente!");
        return this.consultarClientePeloCPF();
    }


    excluirCliente(): void {
        let cliente: Cliente = this.consultarClientePeloCPF();
        let indice = this._clientes.findIndex(c => c.cpf == cliente.cpf);
        // necessita função de validar o indice

        if (cliente.contas.length == 0){
                this._clientes.splice(indice,1);
        }
        else if(indice >= 0 && cliente.contas.length > 0) {
            for (let conta of cliente.contas) {
                let indiceConta: number = this.consultarContaPorIndice(conta.numero);
                this._contas.splice(indiceConta, 1);
            }
            this._clientes.splice(indice, 1);
        }

        msgSucesso();
    }


    sacar(): void {
        let numero: string = input("Digite o número da conta: ");
        let valor: number = receberNumero("Digite o valor: ");
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }


    depositar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);
        let contaDestino: Conta = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }


    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarClientePeloCPF();

        if (contaProcurada && clienteProcurado &&
            !this.jaExisteContaParaCliente(clienteProcurado.cpf, contaProcurada.numero)) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }

    jaExisteContaParaCliente(cpf: string, numero: string): boolean {
        let contaProcurada = this.consultarConta(numero);
        let clienteProcurado = this.consultarCliente(cpf);

        if (!contaProcurada && !clienteProcurado) {
            return false
        }

        if (contaProcurada.cliente == null) {
            return false;
        }

        if (contaProcurada.cliente._cpf == clienteProcurado._cpf) {
            return true;
        }

        for (let contaAssociada of clienteProcurado._contas) {
            if (contaAssociada.numero == contaProcurada.numero) {
                return true;
                break;
            }
        }

        /*
        let conta2 = this.pesquisarContaPorCPF(clienteProcurado.cpf)
        if (conta2) {
            if (conta2.numero = contaProcurada.numero) {
                return true;
            }
        }*/

        return false;
    }

    pesquisarContaPorCPF(cpf: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this._contas) {
            if (conta.cliente && conta.cliente._cpf == cpf) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    listar_ContasSemCliente(): Conta[] {
        let _contas: Conta[] = [];

        for (let conta of this._contas) {
            if (!conta.cliente) {
                _contas.push(conta);
            }
        }

        return _contas;
    }

    listar_ContasCliente(cpf: string): Conta[] {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let _contas: Conta[] = [];

        if (clienteProcurado) {
            _contas = clienteProcurado._contas;
        }
        return _contas;
    }

    listarClientes(): void {
        for (let cliente of this._clientes) {
           cliente.exibirCliente();
        } 
    }

    totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let total: number = 0;
        if (clienteProcurado) {
            for (let conta of clienteProcurado._contas) {
                total += conta.saldo
            }
        }

        return total;
    }


    obterQuantidadeDe_Contas(): number {
        return this._contas.length;
    }


    obterTotalDinheiroDepositado(): number {
        let total: number = 0;

        for (let conta of this._contas) {
            total = total + conta.saldo;
        }
        return total;
    }


    calcularMediaSaldo_Contas(): number {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDe_Contas();
    }

    realizarOrdemBancaria(numeroContaOrigem: string, numeros_ContasDestino: string[], valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroContaOrigem);
        //TODO: validar se o saldo suporta as n transferências

        if (!contaOrigem) {
            return;
        }

        for (let numeroDestino of numeros_ContasDestino) {
            let contaDestino = this.consultarConta(numeroDestino);

            if (contaDestino) {
                contaOrigem.sacar(valor);
                contaDestino.depositar(valor);
            }
        }
    }

    transferirTitularidade(numeroConta: string, cpf: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpf);

        if (!contaProcurada && !clienteProcurado) {
            return;
        }

        if (this.jaExisteContaParaCliente(clienteProcurado._cpf, contaProcurada.numero)) {
            return;
        }

        this.associarContaCliente(contaProcurada.numero, clienteProcurado._cpf);
    }
}

    
import {
    inicializarClientes,
    inicializarContas,
    msgSucesso,
    receberNumero
} from "./utils.js";
    /*
    
    carregarDados() {
        
        let conta1: Conta = new Conta("111-1", 300);
        let conta2: Conta = new Conta("222-2", 0);
        let conta3: Conta = new Conta("333-3", 0);
        let conta4: Conta = new Conta("444-4", 0);

        this.inserirConta(conta1);
        this.inserirConta(conta2);
        this.inserirConta(conta3);
        this.inserirConta(conta4);

        let cliente1: Cliente = new Cliente("Ely", '825', new Date(1979, 6, 29));
        let cliente2: Cliente = new Cliente("Nicolas", '999', new Date(2004, 4, 24));

        this.criarCliente(cliente1);
        this.criarCliente(cliente2);


        this.associarContaCliente('111-1', '825');
        this.associarContaCliente('222-2', '999');
        this.associarContaCliente('333-3', '825');

    }
}
banco.realizarOrdemBancaria('111-1', ['0', '222-2', '333-3', '444-4'], 100);
banco.transferirTitularidade('111-1', '999');
banco.obterQuantidadeDe_Contas();

banco._contas = [];
banco.clientes = [];
conta1.saldo = -111110000000000000;
*/