const express = require('express');
const controlResposta = require("../controle/controlResposta")

const MiddlewareResposta = require("../middleware/middlewareResposta")


module.exports = class RouterResposta {
 
    constructor () { 
        this._router = express.Router()
        this._controleResposta = new controlResposta()
        this._middleResposta = new MiddlewareResposta ()
    }

    criarRotasResposta() {
        this._router.post ('/' ,
            this._middleResposta.controle_resposta_autenticacao,
            this._controleResposta.controle_resposta_post
        )
        
        this._router.get ('/:idRespostas_idUsuario' ,
            this._middleResposta.controle_resposta_autenticacao,
            this._controleResposta.controle_buscarHistorico
        )

        return this._router
    }


}
