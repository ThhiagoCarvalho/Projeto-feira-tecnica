const express = require('express');
const ControleQuestao= require("../controle/controle_questao")

module.exports = class RouterQuiz {

    constructor () { 
        this._router = express.Router( )
        this._ControlQuestao=  new ControleQuestao()
    }


    /*

    o controle questao pode ser 2 em 1 !!!!
    */
    criarRotasQuiz  () {    
        this._router.get ('/perguntas/readByID/:posicao/:idCursoRef' ,
            this._ControlQuestao.controle_get_ID_questao
        )

        this._router.get ('/perguntas/:posicao/:idCursoRef' ,
            this._ControlQuestao.controle_get_questao
        )

        this._router.get ('/respostas/:idCursoRef' ,
            this._ControlQuestao.controle_get_Resposta
        )

        this._router.get ('/respostas/:idCursoRef' ,
            this._ControlQuestao.controle_get_valor_resposta
        )

        return this._router
    }
}

