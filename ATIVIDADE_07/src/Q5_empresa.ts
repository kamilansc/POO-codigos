class Empregado {
    salario: number = 500;
    
    calcularSalario(): number {
        return this.salario;
    };
}

class Diarista extends Empregado {
    calcularSalario(): number {
        return super.calcularSalario()/30;
    }
}

class Horista extends Diarista {
    calcularSalario(): number {
        return super.calcularSalario()/24;
    }
}

let horista: Empregado = new Horista();
let diarista: Empregado = new Diarista();
let empregado: Empregado = new Empregado();

console.log("Salário horista: ", horista.calcularSalario());
console.log("Salário diarista: ", diarista.calcularSalario());
console.log("Salário empregado: ", empregado.calcularSalario());

