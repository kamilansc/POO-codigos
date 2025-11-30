function imprimirSaudacao(nome: string, pronomeTratamento: string = "Sr(a)."
): string {
    return pronomeTratamento + " " + nome;
}

let saudacao = imprimirSaudacao("Otávio", "Sr.");
console.log(saudacao)