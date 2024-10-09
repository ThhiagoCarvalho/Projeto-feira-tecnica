const express = require('express');
const RespostaUsuario = require("../modelo/RespostasUsuarios");

module.exports = class ControlResposta {
    async controle_resposta_post(request, response) {
        try {

            const Respostas_idUsuario = request.body.Respostas_idUsuario; // Captura todos os pontos de uma vez
            const pontos = request.body.pontosUsuario;

            const Pontos_Informatica = pontos.Pontos_Informatica
            const Pontos_Eletronica = pontos.Pontos_Eletronica
            const Pontos_Publicidade = pontos.Pontos_Publicidade
            const Pontos_Administracao = pontos.Pontos_Administracao
            const Pontos_Quimica = pontos.Pontos_Quimica
            const Pontos_Analises = pontos.Pontos_Analises_Clinicas



            const respUsuario = new RespostaUsuario();
            respUsuario.Respostas_idUsuario = Respostas_idUsuario
            respUsuario.Pontos_Informatica = Pontos_Informatica
            respUsuario.Pontos_Eletronica = Pontos_Eletronica
            respUsuario.Pontos_Publicidade = Pontos_Publicidade
            respUsuario.Pontos_Administracao = Pontos_Administracao
            respUsuario.Pontos_Quimica = Pontos_Quimica
            respUsuario.Pontos_Analises = Pontos_Analises 

            const cadastrarResposta = await respUsuario.cadastrarResposta();

            const objResposta = {
                cod: 1,
                status: cadastrarResposta,
                msg: cadastrarResposta ? 'Resposta salva com sucesso' : 'Erro ao salvar'
            };

            response.status(200).json(objResposta); // Alterado para enviar JSON

        } catch (error) {
            console.log("Erro >>>", error);
            response.status(500).json({ message: 'Erro interno do servidor', error: error.message }); // Adicionado tratamento de erro
        }
    }

    async controle_buscarHistorico(request, response) {
      try {
        const Respostas_idUsuario = request.body.Respostas_idUsuario; // Captura todos os pontos de uma vez

        const respUsuario = new RespostaUsuario();
        respUsuario.Respostas_idUsuario = Respostas_idUsuario; // Atribui o email ao objeto respUsuario
          
        const exebirRespostas = await respUsuario.buscarRespostas(); // Chama o método para buscar respostas

        const objResposta = {
            status: exebirRespostas,
            dados: exebirRespostas
        };
  
          response.status(200).json(objResposta); // Envia a resposta em formato JSON
  
      } catch (error) {
          console.log("Erro >>>", error);
          response.status(500).json({ message: 'Erro interno do servidor', error: error.message }); // Adiciona tratamento de erro
      }
  }

}