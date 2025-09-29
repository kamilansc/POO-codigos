class Autenticacao{
    usuario: string;
    senha: string;

    constructor(usuario: string, senha: string){
        this.usuario = usuario;
        this.senha = senha;
    }

    validar(): string{
        if (this.usuario === "admin" && this.senha === "1234"){
            return "true"
        }
        else{
            return "false"
        }
    }
}

let kamila = new Autenticacao("admin", "1234")
console.log(kamila.validar())