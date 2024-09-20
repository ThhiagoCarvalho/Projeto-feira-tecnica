const express = require('express');


const Usuario = require("../modelo/Usuario")
module.exports = class middlewareUsuario {

    validar_nome (request , response , next ) { 
        const nomeUsuario = request.body.nomeUsuario
        

        if ( nomeUsuario.lenght <= 4 ) {
            const objResposta = {
                status: false,
                msg: "O nome esta muito curto!"
            }
                response.status(200).send(objResposta);
        }else {
            next();
        }
        
    }

    validar_email (request , response , next ) { 
        const emailUsuario = request.body.emailUsuario
        

        if ( emailUsuario.lenght <= 4 ) {
            const objResposta = {
                status: false,
                msg: "O email esta muito curto!"
            }
                response.status(200).send(objResposta);
        }else {
            next();
        }
        
    }
    
    validar_senha (request , response , next ) { 
        const senhaUsuario = request.body.senhaUsuario
        

        if ( senhaUsuario.lenght <= 4 ) {
            const objResposta = {
                status: false,
                msg: "A senha esta muito curta!"
            }
                response.status(200).send(objResposta);
        }else {
            next();
        }
        
    }
}