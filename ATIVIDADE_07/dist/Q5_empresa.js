"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    salario = 500;
    calcularSalario() {
        return this.salario;
    }
    ;
}
class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
class Horista extends Diarista {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
let horista = new Horista();
let diarista = new Diarista();
let empregado = new Empregado();
console.log("Salário horista: ", horista.calcularSalario());
console.log("Salário diarista: ", diarista.calcularSalario());
console.log("Salário empregado: ", empregado.calcularSalario());
