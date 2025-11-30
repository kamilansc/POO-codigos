function listarNumeros (numeros: number[]): string {
    let resultado: string = "";

    numeros.forEach((num, index) => {
        if (index === 0) {
            resultado += num;
        } else {
            resultado += " - "+num
        }
        
    });

    return resultado
}

console.log(listarNumeros([1, 10,14,25]))