const express = require('express');
const app = express();
const portaServico = 3000;
const RouterUsuario = require("./router/RouterUsuario")
const RouterResposta = require("./router/RouterResposta")

app.use(express.json());

const roteadorUsuario = new RouterUsuario()
const roteadorResposta = new  RouterResposta ()

app.use ('/usuarios' , 
    roteadorUsuario.criarRotasUsuarios()
)

app.use ('/respostas' , 
    roteadorResposta.criarRotasResposta()
)

app.listen(portaServico, () =>{
    console.log("Api rodando na porta " + portaServico);
})