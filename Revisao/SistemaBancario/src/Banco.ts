import Conta from "./Conta";
import ContaRepository from "./ContasRepository";

export default class Banco{
    contas: Conta[] = [];
    indice: number = 0;

    inserir(conta: Conta): void {
        const contaProcurada: Conta | undefined = this.consultarConta(conta.numero);
        if (conta === undefined) {
            this.contas.push(conta);
        }
        else {
            throw new Error("Já existe um conta com esse número.");
        }
    }

    consultarConta(numero: string): Conta | undefined {
        const conta: Conta | undefined = this.contas.find(conta => conta.numero === numero);
        return conta;
    }
}