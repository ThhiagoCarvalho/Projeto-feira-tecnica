const express = require('express');
const controlQuiz= require("../controle/controlQuiz")

module.exports = class RouterQuiz {

    constructor () { 
        this._router = express.Router( )
        this._controlQuiz=  new controlQuiz()
    }

    criarRotasQuiz  () {    
        this._router.get ('/perguntas' ,
            this._controleResposta.controle_quiz_read_by_id
        )

        this._router.get ('/respostas' ,
            this._controleResposta.controle_quiz_read_by_id
        )
        return this._router
    }
}

