class JogoParImpar{
    numeroJogador: number;
    numeroMaquina: number = 0;

    constructor(numeroJogador: number){
        this.numeroJogador = numeroJogador;
    }

    sortearMaquina(): void{
        this.numeroMaquina = Math.floor(Math.random() * 10) + 1;
    }

    resultado(){
        let soma = this.numeroJogador + this.numeroMaquina;
        if (soma % 2 == 0){
            return "Par"
        } 
        else{
            return "Ímpar"
        }
    }

    vencedor(): string{
        const resultadoSoma = this.resultado();

        if (resultadoSoma == "Par"){
            return "Jogador";
        }
        else{
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