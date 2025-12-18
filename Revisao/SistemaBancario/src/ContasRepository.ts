import fs from "fs";
import path from "path";
import Conta from "./Conta"

export default class ContaRepository {
    private static caminho = path.join(__dirname, "..", "Contas.json");

    static salvar(contas: Conta[]) {
        let contasExistentes = [];

        if (fs.existsSync(this.caminho)) {
        // Se o arquivo existir ele lê ↓
            const conteudoJSON = fs.readFileSync(this.caminho, "utf-8"); // decodifica os bytes em letras usando utf-8 e guarda o texto em JSON
            contasExistentes = JSON.parse(conteudoJSON); //transforma o texto JSON para objeto javaScript onde pode ser acessado seus dados: object.nome
        }

        // Guarda os novos dados no array dados ↓
        const novasContas = contas.map(conta => conta.toJSON());

        // Junta todos os dados ↓
        const todasAsContas = [...contasExistentes, ...novasContas]
        fs.writeFileSync(this.caminho, JSON.stringify(todasAsContas, null, 2));
    }
}