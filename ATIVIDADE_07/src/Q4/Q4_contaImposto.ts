import Conta from "./Q4_conta";

export default class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDesconto: number) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    //reescrevi o método modificando seu comportamento 
    sacar(valor: number): void {
        let desconto = this.saldo * this._taxaDesconto/100;
        let total = valor + desconto; 
        super.sacar(total);
    }
}