import { Banco } from './banco.js';
let banco = new Banco();
banco.inserirCliente();
banco.inserirConta();
console.log(banco.contas);
console.log(banco.clientes);
banco.depositar();
console.log(banco.contas);
console.log(banco.clientes);
