const express = require('express');
const controlUsuario = require("../controle/controlUsuario")

const MiddlewareUsuario = require("../middleware/middlewareUsuario")
module.exports = class RouterUsuario {

    criarRotasUsuarios () {
        this._router = express.Router()

        this._controleUsuario = new controlUsuario()
        this._middleUsuario = new MiddlewareUsuario ()

        this._router.post ('/' ,
            this._middleUsuario.validar_nome,
            this._middleUsuario.validar_email,
            this._middleUsuario.validar_senha,

            this._controleUsuario.controle_post
        )

        this._router.get ('/:idUsuario', 
            this._controleUsuario.controle_get
        )
        this._router.put('/:idUsuario',
            this._controleUsuario.controle_update
        )
        this._router.delete('/:idUsuario',
            this._controleUsuario.controle_delete
        )

        return this._router

    }
}