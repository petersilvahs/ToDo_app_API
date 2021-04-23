const USUARIOS = require('../DAO/usuarios-dao')

module.exports = (app, bd) => {

    const USUARIOS = new USUARIOS(bd);
    app.get('/user', async (req, res) => {
        try {
            const usuarios = await USUARIOS.lista()
            res.send(usuarios);
        }
        catch (erro) {
            res.send(erro)
        }
    });
    app.get('/user/:id', async(req, res) => {
        try{
            const USERparametro = await USUARIOS.parametros(req.params.id)
            res.send(USERparametro)
        }
        catch(erro){
            res.send(erro)
        }
    });
    app.post('/user', async (req, res) => {
        try {
            const ADDuser = await USUARIOS.adicionar([req.body.nome, req.body.email, req.body.senha])
            res.send(ADDuser)
        }
        catch (erro) {
            res.send(erro)
        }
    });
    app.delete('/user/:id', async (req, res) => {
        try {
            const DELuser = await USUARIOS.deletar(req.params.id)
            res.send(DELuser)
        }
        catch(erro){
            res.send(erro)
        }
    });
    app.put('/user/:id', async(req, res) => {
        try {
            const ATLuser = await USUARIOS.atualizar([req.body.nome, req.body.email, req.body.senha, req.params.id])
            res.send(ATLuser)
        }
        catch(erro){
            res.send(erro)
        }
    });
}