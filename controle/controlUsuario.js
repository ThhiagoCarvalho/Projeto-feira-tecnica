const express = require('express');
const Usuario = require("../modelo/Usuario");

module.exports = class ControlUsuario {


    controle_usuario_post (request , response ) { 
        const nomeUsuario = request.nomeUsuario
        const emailUsuario = request.emailUsuario
        const senhaUsuario = request.senhaUsuario

        const usuario = new Usuario()
        usuario.nomeUsuario = nomeUsuario
        usuario.emailUsuario = emailUsuario
        usuario.senhaUsuario = senhaUsuario

        const objResposta = {
            resposta : usuario.cadastrar()
        }
        response.status(200).send(objResposta);
    }

}