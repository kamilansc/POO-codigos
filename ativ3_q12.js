"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JogoParImpar {
    numeroJogador;
    numeroMaquina = 0;
    constructor(numeroJogador) {
        this.numeroJogador = numeroJogador;
    }
    sortearMaquina() {
        this.numeroMaquina = Math.floor(Math.random() * 10) + 1;
    }
    resultado() {
        let soma = this.numeroJogador + this.numeroMaquina;
        if (soma % 2 == 0) {
            return "Par";
        }
        else {
            return "Ímpar";
        }
    }
    vencedor() {
        const resultadoSoma = this.resultado();
        if (resultadoSoma == "Par") {
            return "Jogador";
        }
        else {
            return "Máquina";
        }
    }
}
const jogo = new JogoParImpar(7);
jogo.sortearMaquina();
console.log(`Número do jogador: ${jogo.numeroJogador}`);
console.log(`Número da máquina: ${jogo.numeroMaquina}`);
console.log(`Resultado: ${jogo.resultado()}`);
console.log(`Vencedor: ${jogo.vencedor()}`);
