module.exports = class Tarefa {

    constructor(bd) {
        this.bd = bd;
    }
    lista() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS", (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de consultar tarefas");
                else resolve("Tentativa de consultar tarefas bem sucedida!");
            })
        })

    }
    buscar(informação) {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS WHERE ID = ?", informação, (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de atualizar o id da tarefa");
                else resolve("Tentativa de atualizar o id bem sucedida!");
            })
        })

    }

    enviar(dado) {
        return new Promise((resolve, reject) => {
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)", dado, (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de enviar tarefas");
                else resolve("Envio de informações bem sucedido!");
            })
        })
    }

    deletar(deletar) {
        return new Promise((resolve, reject) => {
            this.bd.all("DELETE FROM TAREFAS WHERE ID = ?", deletar, (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de deletar tarefas");
                else resolve("Tentativa de deletar dados bem sucedida!");
            })
        })
    }

    atualizar(parametro) {
        return new Promise((resolve, reject) => {
            this.bd.all("UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE ID = ?", parametro, (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de atualizar tarefas");
                else resolve("Atualização bem sucedida!");
            })

        })
    }
}