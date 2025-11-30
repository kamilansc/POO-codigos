class Sorteio {
    dados;
    constructor(dados) {
        this.dados = dados;
    }
    adicionar(nome) {
        this.dados.push(nome);
    }
    sortear() {
        var nomeAleatorio = this.dados[Math.floor(Math.random() * this.dados.length)];
        return nomeAleatorio;
    }
}
let sorteio1 = new Sorteio(["kamila", "maria júlia", "pipipi pópópó", "arthur"]);
sorteio1.adicionar("Janja");
console.log(sorteio1.sortear());
export {};
