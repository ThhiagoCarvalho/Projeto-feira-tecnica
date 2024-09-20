const express = require('express');
const app = express();
const portaServico = 3000;
const RouterUsuario = require("./router/RouterUsuario")

app.use(express.json());

const roteadorUsuario = new RouterUsuario()

app.use ('/usuarios' , 
    roteadorUsuario.criarRotasUsuarios()
)

app.listen(portaServico, () =>{
    console.log("Api rodando na porta " + portaServico);
})