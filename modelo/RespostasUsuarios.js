
const Banco = require("./Banco")

module.exports = class RespostaUsuario  {

    constructor () {
        this._Respostas_idUsuario = null
        this._Data_Teste = ""
        this._Pontos_Informatica = null
        this._Pontos_Eletronica = null
        this._Pontos_Publicidade = null
        this._Pontos_Administracao = null
        this._Pontos_Quimica = null
        this._Pontos_Analises = null
    }

    async cadastrarResposta () { 
        const conexao = Banco.getConexao()
        const sql = "insert into Respostas_Usuarios  (Respostas_idUsuario,Data_Teste,Pontos_Informatica,Pontos_Eletronica,Pontos_Publicidade,Pontos_Administracao,Pontos_Quimica,Pontos_Analises ) values (?,?,?,?,?,?,?,?)"
        try { 
            const [result] = await conexao.promise().execute(sql , [this._Respostas_idUsuario, this._Data_Teste, this._Pontos_Informatica, this._Pontos_Eletronica, this._Pontos_Publicidade, this._Pontos_Administracao,this._Pontos_Quimica, this._Pontos_Analises])
            this._idUSuario = result.insertId;
            return result.affectedRows > 0;

        }catch (error) {
            console.log("Errro >>>" , error)
            return false
        }
    }

    async buscarRespostas  () { 
        const conexao = Banco.getConexao()
        const sql = "select  Respostas_Usuarios.* from Respostas_Usuarios  left join Usuarios on Usuarios.idUsuario = Respostas_Usuarios.Respostas_idUsuario where Usuarios.idUsuario  = ?;"
        try { 
            const [result] = await conexao.promise().execute(sql , [this._Respostas_idUsuario])
            return result;

        }catch (error) {
            console.log("Errro >>>" , error)
            return false
        }
    }
    
    async getCalcularCurso () { 
        const conexao = Banco.getConexao()
        const sql = "SELECT ID_Curso FROM Cursos WHERE Nome_Curso = ?;"
        try { 
            const pontos = {
                Informática: this._Pontos_Informatica,
                Eletrônica: this._Pontos_Eletronica,
                Publicidade: this._Pontos_Publicidade,
                Administração: this._Pontos_Administracao,
                Química: this._Pontos_Quimica,
                Análises: this._Pontos_Analises 
            };
            const MaiorPontos = Object.keys(pontos).reduce((a, b) => pontos[a] > pontos[b] ? a : b);
            const [result] = await conexao.promise().execute(sql, [MaiorPontos]);
            if (result.length > 0) {
                return parseInt(result[0].ID_Curso, 10); 
            } else {
                return null; 
            }
        }catch (error) {
            console.log("Errro >>>" , error)
            return false
        }
    }


    get Respostas_idUsuario() {
        return this._Respostas_idUsuario;
    }

    set Respostas_idUsuario(value) {
        this._Respostas_idUsuario = value;
    }

    // Getters e Setters para _Data_Teste
    get Data_Teste() {
        return this._Data_Teste;
    }

    set Data_Teste(value) {
        this._Data_Teste = value;
    }

    // Getters e Setters para _Pontos_Informatica
    get Pontos_Informatica() {
        return this._Pontos_Informatica;
    }

    set Pontos_Informatica(value) {
        this._Pontos_Informatica = value;
    }

    // Getters e Setters para _Pontos_Eletronica
    get Pontos_Eletronica() {
        return this._Pontos_Eletronica;
    }

    set Pontos_Eletronica(value) {
        this._Pontos_Eletronica = value;
    }

    // Getters e Setters para _Pontos_Publicidade
    get Pontos_Publicidade() {
        return this._Pontos_Publicidade;
    }

    set Pontos_Publicidade(value) {
        this._Pontos_Publicidade = value;
    }

    // Getters e Setters para _Pontos_Adminitracao
    get Pontos_Administracao() {
        return this._Pontos_Administracao;
    }

    set Pontos_Administracao(value) {
        this._Pontos_Administracao = value;
    }

    // Getters e Setters para _Pontos_Quimica
    get Pontos_Quimica() {
        return this._Pontos_Quimica;
    }

    set Pontos_Quimica(value) {
        this._Pontos_Quimica = value;
    }

    // Getters e Setters para _Pontos_Analises
    get Pontos_Analises() {
        return this._Pontos_Analises;
    }

    set Pontos_Analises(value) {
        this._Pontos_Analises = value;
    }
}