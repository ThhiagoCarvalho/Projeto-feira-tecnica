const Banco = require("./Banco");

module.exports = class Questoes {
    constructor() {
        this._ID_Curso = null;
        this._Botao_Valor = null;
        this._Resposta_Usuario = null; // Adiciona o campo para a resposta do usuário
    }

    async getQuestao() { 
        const conexao = Banco.getConexao();
        const sql = "SELECT Questao FROM Questoes_Cursos WHERE Posicao = ? AND ID_Curso_Ref = ?;";
        try { 
            let result;

            if (this._ID_Curso < 4) {
                [result] = await conexao.promise().execute(sql, [this._Botao_Valor, 1000]);
            } else {
                [result] = await conexao.promise().execute(sql, [this._Botao_Valor, this._ID_Curso]);
            }
            return result[0].Questao;
        } catch (error) {
            console.log("Erro >>>", error);
            return false;
        }
    }

    async getRespostas() { 
        const conexao = Banco.getConexao();
        const sql = "SELECT Resposta FROM Respostas_Questoes WHERE ID_Curso_Ref = ?;";
        try { 
            let IdQuestao = await this.getIdQuestoes();
            let result;   
            [result] = await conexao.promise().execute(sql, [IdQuestao]);
            return result;
        } catch (error) {
            console.log("Erro >>>", error);
            return false;
        }
    }

    async getIdQuestoes() { 
        const conexao = Banco.getConexao();
        const sql = "SELECT ID_Questao FROM Questoes_Cursos WHERE Posicao = ? AND ID_Curso_Ref = ?;";
        try { 
            let result;
            if (this._ID_Curso < 4) {
                [result] = await conexao.promise().execute(sql, [this._Botao_Valor, 1000]);
            } else {
                [result] = await conexao.promise().execute(sql, [this._Botao_Valor, this._ID_Curso]);
            }
            return result[0].ID_Questao;
        } catch (error) {
            console.log("Erro >>>", error);
            return false;
        }
    }

    async getValorResposta() { 
        const conexao = Banco.getConexao();
        const sql = "SELECT Valor_Resposta FROM Respostas_Questoes WHERE ID_Questao_Ref = ? AND Resposta = ?;";
        try { 
            let IdQuestao = await this.getIdQuestoes(); // Obtém o ID da questão
            let result;
            // Passa o ID da questão e a resposta do usuário para a consulta
            [result] = await conexao.promise().execute(sql, [IdQuestao, this._Resposta_Usuario]);  
            return result[0].Valor_Resposta;
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
}
