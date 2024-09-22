const express = require('express');
const RespostaUsuario = require("../modelo/RespostasUsuarios");
const MeuTokenJWT = require("../modelo/MeuTokenJWT")

module.exports = class ControlResposta {

    async controle_resposta_post (request , response)  {
        try{
            const idUsuarioResposta = request.body.idUsuarioResposta
            const Data_Teste = request.body.data
            const Pontos_Informatica = request.body.Pontos_Informatica
            const Pontos_Eletronica = request.body.Pontos_Eletronica
            const Pontos_Publicidade = request.body.Pontos_Publicidade
            const Pontos_Administracao = request.body.Pontos_Administracao
            const Pontos_Quimica = request.body.Pontos_Quimica
            const Pontos_Analises = request.body.Pontos_Analises


            const respUsuario = new RespostaUsuario ()
            
            respUsuario.Respostas_idUsuario = idUsuarioResposta
            respUsuario.Data_Teste = Data_Teste
            respUsuario.Pontos_Informatica = Pontos_Informatica
            respUsuario.Pontos_Eletronica = Pontos_Eletronica
            respUsuario.Pontos_Publicidade = Pontos_Publicidade
            respUsuario.Pontos_Administracao = Pontos_Administracao
            respUsuario.Pontos_Quimica = Pontos_Quimica
            respUsuario.Pontos_Analises= Pontos_Analises
            

            const cadastrarResposta =  await respUsuario.cadastrarResposta ()

            const objResposta = {
                cod: 1,
                status: cadastrarResposta,
                msg: cadastrarResposta ? 'Resposta salva com sucesso' : 'Erro ao salvar'
            };

            response.status(200).send(objResposta);

        }catch (error) {
            console.log("Errro >>>" , error)
            return false
        }
    }

    async controle_resposta_read_by_id (request , response) {
        try {
            const idUsuarioResp = request.params.idRespostas_idUsuario
            
            const respUsuario = new RespostaUsuario ()
            respUsuario.Respostas_idUsuario = idUsuarioResp
            const exebirRespostas =  await respUsuario.buscarRespostas ()

            const objResposta = {
                status: true,
                dados : exebirRespostas
            };

            response.status(200).send(objResposta);


        }catch (error) {
            console.log("Errro >>>" , error)
            return false
        }

    }
}

