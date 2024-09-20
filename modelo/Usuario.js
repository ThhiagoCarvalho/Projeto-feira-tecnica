module.exports = class Usuario {

    constructor() { 
        this._nomeUsuario = ""
        this._emailUsuario = ""
        this._senhaUsuario = ""
    }

    cadastrar () {

    }

    login (){


    }

    verificarUsuario () {

    }


    set nomeUsuario (nomeUsuario) {
        this._nomeUsuario = nomeUsuario
    }
    get nomeUsuario () {
        return this._nomeUsuario 
    }
    set emailUsuario (emailUsuario) {
        this._emailUsuario = emailUsuario
    }
    get emailUsuario () {
        return this._emailUsuario 
    }
    set senhaUsuario (senhaUsuario) {
        this._senhaUsuario = senhaUsuario
    }
    get senhaUsuario () {
        return this._senhaUsuario 
    }

}