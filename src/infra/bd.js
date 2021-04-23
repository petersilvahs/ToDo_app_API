const Usuarios = require('../models/Usuario');

const banco = {
    usuario: [
        new Usuario ('user1', 'email1@teste.com', 'senha1'),
        new Usuario ('user2','email2@teste.com','senha2'),
        new Usuario ('user3','email3@teste.com','senha3'),
        new Usuario ('user4','email4@teste.com','senha4'),
    ],
    tarefa: [],
};

module.exports = banco;