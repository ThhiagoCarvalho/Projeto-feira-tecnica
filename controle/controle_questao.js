const express = require('express');
const Questao = require("../modelo/Questao");
const MeuTokenJWT = require("../modelo/MeuTokenJWT")

module.exports = class ControlQuestao {


    async controle_get_questao (request , response)  {
        const botaoValor = request.params.posicao
        const idCursoRef = request.params.idCursoRef

        const questao = new Questao()
        questao.ID_Curso = idCursoRef
        questao.Botao_Valor = botaoValor

        const questaoExiste  = await questao.getQuestao();

        const objResposta = {
            cod: 1,
            status: questaoExiste,
            msg: questaoExiste ? 'Sucesso ao buscar' : 'Erro ao buscar' ,
            dados : questaoExiste
        };
            
        response.status(200).send(objResposta);

    }


    async controle_get_ID_questao (request , response)  {
        const botaoValor = request.params.posicao
        const idCursoRef = request.params.idCursoRef

        const questao = new Questao()
        questao.ID_Curso = idCursoRef
        questao.Botao_Valor = botaoValor

        const questaoExiste  = await questao.getIdQuestao();

        const objResposta = {
            cod: 1,
            status: questaoExiste,
            msg: questaoExiste ? 'Sucesso ao buscar' : 'Erro ao buscar' ,
            dados : questaoExiste
        };
            
        response.status(200).send(objResposta);

    }


    async controle_get_Resposta (request , response)  {
        const idCursoRef = request.params.idCursoRef

        const questao = new Questao()
        questao.ID_Curso = idCursoRef

        const respostaExiste  = await questao.getRespostas();

        const objResposta = {
            cod: 1,
            status: respostaExiste,
            msg: respostaExiste ? 'Sucesso ao buscar' : 'Erro ao buscar' ,
            dados : respostaExiste
        };
            
        response.status(200).send(objResposta);

    }



    async controle_get_valor_resposta (request , response)  {
        const idCursoRef = request.params.idCursoRef
        const resposta = request.body.resposta

        const questao = new Questao()
        questao.ID_Curso = idCursoRef
        questao.Resposta_Usuario = resposta

      
        const respostaExiste  = await questao.getValorResposta();

        const objResposta = {
            cod: 1,
            status: respostaExiste,
            msg: respostaExiste ? 'Sucesso ao buscar' : 'Erro ao buscar' ,
            dados : respostaExiste
        };
            
        response.status(200).send(objResposta);

    }


}