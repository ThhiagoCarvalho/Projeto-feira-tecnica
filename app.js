const express = require('express');
const app = express();
const portaServico = 3000;

app.use(express.json());

app.get ('/' , (request , response) =>{
    const resposta =  {msg : "Ola mundo"}
    response.status(200).send(resposta)
})


app.listen(portaServico, () =>{;
    console.log("Api rodando na porta " + portaServico);
})