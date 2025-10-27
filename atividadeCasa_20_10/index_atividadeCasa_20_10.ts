class Conta {
    id: number;
    numero: string;
    cliente: Cliente;
    dataAbertura: Date;
    saldo: number;

    constructor (id: number, cliente: Cliente, numero: string, dataAbertura: Date, saldo: number) {
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
    }
}


class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor (id: number, nome: string, cpf: string, dataNascimento: Date, contas: Conta[] = []) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = contas;
    }
}


class Banco {
    clientes: Cliente[];
    contas: Conta[];

    constructor (clientes: Cliente[] = [], contas: Conta[] = []) {
        this.clientes = clientes;
        this.contas = contas;
    }

    inserirCliente (cliente: Cliente): void {
        const clienteComMesmoCpf = this.consultarCliente(cliente.cpf);
        const clienteComMesmoId = this.clientes.find(c => c.id === cliente.id);
        
        if (clienteComMesmoCpf == null && clienteComMesmoId == null) {
            this.clientes.push(cliente);
        }
    }

    inserirConta (conta: Conta): void {
        const contaComMesmoNumero = this.consultarConta(conta.numero);
        const contaComMesmoId = this.contas.find(c => c.id === conta.id);

        if (contaComMesmoNumero == null && contaComMesmoId == null) {
            this.contas.push(conta);
        }
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
}

let cliente1 = new Cliente(1, "Kamila", "077", new Date());
let cliente2 = new Cliente(2, "Arthur", "022", new Date());

let conta1 = new Conta(1, cliente1, "123", new Date(), 0);
let conta2 = new Conta(2, cliente2, "345", new Date(), 190);
let conta3 = new Conta(3, cliente2, "555", new Date(), 10);

let banco: Banco = new Banco();
banco.inserirCliente(cliente1);
banco.inserirCliente(cliente2);

banco.inserirConta(conta1);
banco.inserirConta(conta2);
banco.inserirConta(conta3);

console.log(banco);
banco.associarContaCliente("123", "077");
banco.associarContaCliente("345", '022');
banco.associarContaCliente("555", "022");

console.log("---------");
console.log(banco.listarContasCliente("022"));
console.log("\n---------");

console.log("Saldo total da conta '022': ", banco.totalizarSaldoCliente("033"));

/*
6)
    a. Sim, de fato o banco consegue gerenciar as entidades Conta e Cliente e atende as regras de negócios
    propostas.
    
    b. Sim, o código ficaria mais organizado, limpo e fácil de testar.

    c. Na classe Banco.
*/
