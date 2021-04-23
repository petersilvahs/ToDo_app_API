const Tarefa = require('../DAO/tarefa-dao');

module.exports = (app, bd) => {
    const TarefaDao = new Tarefa(bd)
    app.get('/tarefas', async(req, resp) => {
            try {
                let retorna = await TarefaDao.lista();
                resp.send(retorna);
            } catch (erro) {
                resp.send(erro);
            }
        })
    app.get('/tarefas/:id', async(req, resp) => {
            try {
                let procura = await TarefaDao.buscar(req.params.id);
                resp.send(procura);
            } catch (erro) {
                resp.send(erro);
            }
        })
    app.post('/tarefas', async(req, resp) => {
        let dados = [
            req.body.titulo,
            req.body.descricao,
            req.body.status,
            req.body.dataCriacao,
            req.body.id_usuario
        ]
        try {
            let manda = await TarefaDao.enviar(dados);
            resp.send(manda);
        } catch (erro) {
            resp.send(erro);
        }
    })
    app.delete('/tarefas/:id', async(req, resp) => {
            try {
                let exclui = await TarefaDao.deletar(req.params.id);
                resp.send(exclui);
            } catch (erro) {
                resp.send(erro);
            }
        })
    app.put('/tarefas/:id', async(req, resp) => {
        let parametros = [
            req.body.titulo,
            req.body.descricao,
            req.body.status,
            req.body.dataCriacao,
            req.body.id_usuario,
            req.params.id
        ]
        try {
            let atual = await TarefaDao.atualizar(parametros);
            resp.send(atual);
        } catch (erro) {
            resp.send(erro);
        }
    })

}