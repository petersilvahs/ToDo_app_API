module.exports = class UsuariosDao {

    constructor(bd) {
        this.bd = bd;
    }
    listaUser() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS", (error, linhas) => {
                if (error) reject("Erro ao tentar consultar usuário");
                else resolve("Consulta executada com sucesso!");
            })
        })
    }
    buscaUser(informa) {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS WHERE ID = ?", informa, (error, linhas) => {
                if (error) reject("Erro eao tentar consultar o id do usuário");
                else resolve("Busca executada com sucesso!");
            })
        })
    }
    atualizaUser(novo) {
        return new Promise((resolve, reject) => {
            this.bd.run("UPDATE USUARIOS SET NOME=?, EMAIL=?, SENHA=? WHERE ID= ?", novo, (error) => {
                if (error) reject("Erro ao tentar consultar a atualização do usuários");
                else resolve("Usuário atualizado!");
            })

        })
    }
    deletaUser(deleta) {
        return new Promise((resolve, reject) => {
            this.bd.all("DELETE FROM USUARIOS WHERE ID = ?", deleta, (error, linhas) => {
                if (error) reject("Erro encontrado ao tentar consultar e deletar usuários");
                else resolve("Usuário deletado com sucesso!");
            })
        })
    }
    enviaUser(envia) {
        return new Promise((resolve, reject) => {
            this.bd.all("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", envia, (error, linhas) => {
                if (error) reject("Erro encontrado ao consultar enviar usuários");
                else resolve("Novo usuário incluso com sucesso!");
            })
        })
    }
}