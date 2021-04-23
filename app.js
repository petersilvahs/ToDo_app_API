const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const usuarioController = require('./src/controllers/usuario-controller');
const tarefaController = require ('./src/controllers/tarefa-controller');

const dados = require('./infra/bd')
const port = 3000

app.use(bodyParser.json());
usuarioController(app, dados);
tarefaController(app, dados);

app.listen(port, () => console.log (`Servidor rodando no localhost:${port}`));