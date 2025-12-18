import Conta from "./Conta";
import Banco from "./Banco";
import ContaRepository from "./ContasRepository";

const c1: Conta = new Conta(1, "111-1", 200);
const c2: Conta = new Conta(2, "222-2", 300);
const c3: Conta = new Conta(3, "111-1", 600);

try{
    const banco: Banco = new Banco();
    banco.inserir(c1);
    banco.inserir(c3);

    ContaRepository.salvar(banco.contas);
}
catch (erro) {
    if (erro instanceof Error) {
        console.log(erro.message);
    }
    
}
// banco.inserir(c2);
