/* 
   Questão 01
   F - As classes que são modelos para objetos
   V - A menos que você faça configurações específicas 
       para que a falta de inicialização não comprometa o código
   F - Entretanto, o uso de variáveis não inicializadas pode gerar 
       efeitos colaterais
   V - Observe ainda, que por padrão, utilizar essa classe sem inicialização
       acarretará em um erro de variável não inicializada
   V
   V
   V    
*/

class A {
    b: number = 0;

    metodoC(): void {
        let d;
        let a: A;
        console.log(d);
        console.log(a);
    }
}

let a: A = new A();
a.metodoC();

//Questão 02 e 03
//Há problema de compilação por não inicialização do atributo.
class Hotel {

    quantReservas: number;

    constructor(quantReservas: number) {
        this.quantReservas = quantReservas;
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }
}

let hotel: Hotel = new Hotel(2);
hotel.adicionarReserva();
console.log(hotel.quantReservas);

class Radio {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;

    }
}

let r: Radio = new Radio(1);
r.volume = 10;

//Questão 05, 08 e 09
class Conta {
    id: number;
    numero: string;
    saldo: number;

    constructor(id: number, numero: string,
        saldoInicial: number) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor: number): boolean {
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
            return true;
        }

        return false;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }

        return false;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

let c1: Conta = new Conta(1, "1111-1", 100);
let c2: Conta = new Conta(2, "2222-2", 100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());

let c4: Conta = new Conta(4, '444-4', 40);
let c5: Conta = new Conta(5, '555-5', 50);

console.log("Transferiu? " + c4.transferir(c5, 100));
// 09 - Depende se o banco aceita saldo negativo. O ideal seria ter um limite.


/* 
  a) Todos os saldos são 90, pois todos os objetos são referências pra mesma
  área de memória;
  b) Ele perde a referência. No futuro, será descartado pelo
     Garbage Collector
*/

//Questão 06
class Triangulo {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    ehTriangulo(): boolean {
        let resultado: boolean = false;

        if ((this.a > Math.abs(this.b - this.c)) &&
            (this.a < this.b + this.c)) {
            resultado = true;
        }

        return resultado;
    }

    ehEquilatero(): boolean {
        let resultado: boolean = false;

        if (this.ehTriangulo() &&
            (this.a == this.b && this.b == this.c)) {
            resultado = true;
        }

        return resultado;
    }

    ehEscaleno(): boolean {
        let resultado: boolean = false;

        if (this.ehTriangulo() &&
            (this.a != this.b && this.a != this.c && this.b != this.c)) {
            resultado = true;
        }

        return resultado;
    }

    ehIsoceles(): boolean {
        let resultado = false;

        if (this.ehTriangulo() &&
            !this.ehEquilatero() &&
            !this.ehEscaleno()) {
            resultado = true;
        }

        return resultado;
    }

    calcularPerimetro(): number {
        return this.a + this.b + this.c
    }

    temMesmoPerimetro(outroTriangulo: Triangulo): boolean {
        return this.calcularPerimetro() == outroTriangulo.calcularPerimetro();
    }
}

let t1: Triangulo = new Triangulo(1, 10, 20);
let t2: Triangulo = new Triangulo(2, 2, 3);
//let t3: Triangulo = new Triangulo();
//let t4: Triangulo = new Triangulo();
console.log("t1 é triângulo? " + t1.ehTriangulo());
console.log("t1 é isóceles? " + t1.ehIsoceles());
console.log("t2 é isóceles? " + t2.ehIsoceles());
console.log("t2 é equilátero? " + t2.ehEquilatero());

class Equipamento {
    ligado: boolean;

    constructor(ligado: boolean) {
        this.ligado = ligado;
    }

    ligar(): void {
        if (!this.ligado) {
            this.ligado = true;
        }
    }

    desligar(): void {
        if (this.ligado) {
            this.ligado = false;
        }
    }

    inverter(): void {
        this.ligado = !this.ligado;
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let e1: Equipamento = new Equipamento(false);
e1.ligar();
console.log("Está ligado? " + e1.estaLigado());
e1.inverter();
console.log("Está ligado? " + e1.estaLigado());


class Jogador {
    forca: number;
    nivel: number;
    pontos: number;

    constructor(forca: number, nivel: number, pontos: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(oponente: Jogador) {
        if (oponente.estaVivo()) {
            let dano = this.calcularAtaque();
            oponente.pontos = oponente.pontos - dano;
        }
    }

    estaVivo(): boolean {
        return this.pontos > 0;
    }
}

let j1: Jogador = new Jogador(10, 1, 100);
let j2: Jogador = new Jogador(20, 3, 100);

j2.atacar(j1);
console.log("j1: está vivo? " + j1.estaVivo() + " - " + j1.pontos)
j1.atacar(j2);
console.log("j2: está vivo? " + j2.estaVivo() + " - " + j2.pontos)
j2.atacar(j1);
console.log("j1: está vivo? " + j1.estaVivo() + " - " + j1.pontos)
j2.atacar(j1);
j2.atacar(j1);
console.log("j1: está vivo? " + j1.estaVivo() + " - " + j1.pontos)
