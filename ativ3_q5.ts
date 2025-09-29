function exibir(...dados: string[]): void{
    for (let i = 0; i < (dados.length); i++){
        console.log(dados[i])

    }
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d")