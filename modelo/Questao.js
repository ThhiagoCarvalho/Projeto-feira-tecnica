const Banco = require("./Banco");

module.exports = class Questoes {
    constructor() {
        this._ID_Curso = null;
        this._Botao_Valor = null;
        this._Resposta_Usuario = null;
        this._Respostas_idUsuario = null;
        this._Pontos_Informatica = null;
        this._Pontos_Eletronica = null;
        this._Pontos_Publicidade = null;
        this._Pontos_Administracao = null;
        this._Pontos_Quimica = null;
        this._Pontos_Analises = null;
    }

    // Método para obter a questão
    async getQuestao() { 
        const conexao = Banco.getConexao();
        const sql = "SELECT Questao FROM Questoes_Cursos WHERE Posicao = ? AND ID_Curso_Ref = ?;";
        try { 
            let result;
            [result] = await conexao.promise().execute(sql, [this._Botao_Valor, this._ID_Curso]);
            if (result.length > 0) {
                return result[0].Questao;
            } else {
                console.log("Questão não encontrada");
                return null;
            }
        } catch (error) {
            console.log("Erro ao buscar a questão:", error);
            return false;
        }
    }

    // Método para obter as respostas
    async getRespostas() { 
        const conexao = Banco.getConexao();
        const sql = "SELECT Resposta FROM Respostas_Questoes WHERE ID_Questao_Ref = ?;";
        try { 
            let IdQuestao = await this.getIdQuestao();
            if (!IdQuestao) {
                console.log("ID da questão não encontrado");
                return null;
            }

            const [result] = await conexao.promise().execute(sql, [IdQuestao]);
            if (result.length > 0) {
                return result;
            } else {
                console.log("Respostas não encontradas");
                return null;
            }
        } catch (error) {
            console.log("Erro ao buscar respostas:", error);
            return false;
        }
    }

    // Método para obter o ID da questão
    async getIdQuestao() { 
        const conexao = Banco.getConexao();
        const sql = "SELECT ID_Questao FROM Questoes_Cursos WHERE Posicao = ? AND ID_Curso_Ref = ?;";
        try { 
            let result;   
            [result] = await conexao.promise().execute(sql, [this._Botao_Valor, this._ID_Curso]);
            if (result.length > 0) {
                return result[0].ID_Questao;
            } else {
                console.log("ID da questão não encontrado");
                return null;
            }
        } catch (error) {
            console.log("Erro ao buscar o ID da questão:", error);
            return false;
        }
    }

    
    

    // Método para obter o valor da resposta do usuário
    async getValorResposta() { 
        const conexao = Banco.getConexao();
        const sql = "SELECT Valor FROM Respostas_Questoes WHERE ID_Questao_Ref = ? AND Resposta = ?;";
        try { 
            let IdQuestao = await this.getIdQuestao();
            if (!IdQuestao) {
                console.log("ID da questão não encontrado");
                return null;
            }

            const [result] = await conexao.promise().execute(sql, [IdQuestao, this._Resposta_Usuario]);
            if (result.length > 0) {
                return result[0].Valor;
            } else {
                console.log("Valor da resposta não encontrado");
                return null;
            }
        } catch (error) {
            console.log("Erro ao buscar valor da resposta:", error);
            return false;
        }
    }
    async getCalcularCurso() {
        const conexao = Banco.getConexao();
        const sql = "SELECT ID_Curso FROM Cursos WHERE Nome_Curso = ?;";
        try {
            const pontos = {
                Informática: this._Pontos_Informatica,
                Eletrônica: this._Pontos_Eletronica,
                Publicidade: this._Pontos_Publicidade,
                Administração: this._Pontos_Administracao,
                Química: this._Pontos_Quimica,
                Análises: this._Pontos_Analises
            };
    
            const cursosSelecionados = [];
            
            for (const curso in pontos) {
                if (pontos[curso] > 0) {
                    const [result] = await conexao.promise().execute(sql, [curso]);
                    if (result.length > 0) {
                        cursosSelecionados.push(result[0].ID_Curso);
                    }
                }
            }
    
            return cursosSelecionados; 
        } catch (error) {
            console.log("Erro >>>", error);
            return false;
        }
    }
    
    // Getter e Setter para _ID_Curso
    get ID_Curso() {
        return this._ID_Curso;
    }

    set ID_Curso(value) {
        this._ID_Curso = value;
    }

    // Getter e Setter para _Botao_Valor
    get Botao_Valor() {
        return this._Botao_Valor;
    }

    set Botao_Valor(value) {
        this._Botao_Valor = value;
    }

    // Getter e Setter para _Resposta_Usuario
    get Resposta_Usuario() {
        return this._Resposta_Usuario;
    }

    set Resposta_Usuario(value) {
        this._Resposta_Usuario = value;
    }

    // Getter e Setter para _Respostas_idUsuario
    get Respostas_idUsuario() {
        return this._Respostas_idUsuario;
    }

    set Respostas_idUsuario(value) {
        this._Respostas_idUsuario = value;
    }

    // Getter e Setter para os pontos das áreas
    get Pontos_Informatica() {
        return this._Pontos_Informatica;
    }

    set Pontos_Informatica(value) {
        this._Pontos_Informatica = value;
    }

    get Pontos_Eletronica() {
        return this._Pontos_Eletronica;
    }

    set Pontos_Eletronica(value) {
        this._Pontos_Eletronica = value;
    }

    get Pontos_Publicidade() {
        return this._Pontos_Publicidade;
    }

    set Pontos_Publicidade(value) {
        this._Pontos_Publicidade = value;
    }

    get Pontos_Administracao() {
        return this._Pontos_Administracao;
    }

    set Pontos_Administracao(value) {
        this._Pontos_Administracao = value;
    }

    get Pontos_Quimica() {
        return this._Pontos_Quimica;
    }

    set Pontos_Quimica(value) {
        this._Pontos_Quimica = value;
    }

    get Pontos_Analises() {
        return this._Pontos_Analises;
    }

    set Pontos_Analises(value) {
        this._Pontos_Analises = value;
    }
};
