function escolheNome(nomes: string[]){
    let tamanhoArray = nomes.length
    let numAleatorio = Math.floor(Math.random()*tamanhoArray)

    return nomes[numAleatorio]
}

console.log(escolheNome(["kamila", "otavio", "arthur", "violeta", "Julia", "eduarda", "carol", "luana", "luiz", "lucas"]))