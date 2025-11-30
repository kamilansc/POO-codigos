import { Calculadora } from "./Q2_calculadora";

class calculadoraCientifica extends Calculadora{
    constructor(operando1: number, operando2: number) {
        super(operando1, operando2);
    }
    exponenciar(): number{
        return this.operando1 ** this.operando2;
    }
}


let CalculadoraCientifica: calculadoraCientifica = new calculadoraCientifica(6, 2); 
console.log(CalculadoraCientifica.exponenciar());