class TradutorEmojis{
    dicionario: {[palavra: string]: string} = {
        "amor": "<3",
        "futebol": "(・_・)ノO",
        "cachorro": "૮・ᴥ・ა",
        "bola": "⚽",
        "jogador": "⛹️‍♂️"
    }

    traduzir(frase: string){
        let novaFrase: string = "";
        let palavras = frase.split(" ")

        for (let palavra of palavras){
            if (this.dicionario[palavra.toLowerCase()]){
                novaFrase += this.dicionario[palavra.toLowerCase()] + " ";
            }
            else{
                novaFrase += palavra + " "
            }
        }
        console.log(novaFrase)
    }
}

let tentativa = new TradutorEmojis();
tentativa.traduzir("O amor do brasileiro é o futebol");
let tentativa2 = new TradutorEmojis();
tentativa2.traduzir("Cachorro");
tentativa2.traduzir('bola');
tentativa2.traduzir('O jogador é alto')