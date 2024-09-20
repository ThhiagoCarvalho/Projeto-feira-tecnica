const express = require('express');
const app = express();
const portaServico = 3000;

app.use(express.json());


app.get ('/usuarios' , (request , response) =>{
    const resposta =  {msg : "Ola mundo"}
    response.status(200).send(resposta)
})


app.get ('/usuarios/:id' , (request , response) =>{
    const parametroId = request.params.id
    const resposta =  {msg : `Ola ! recebi um id: ${parametroId} `}
    response.status(200).send(resposta)
})


app.post ('/usuarios' , (request , response) =>{
    const resposta =  {msg : "recebi um POST"}
    response.status(200).send(resposta)
})


app.put ('/usuarios/:id' , (request , response) =>{
    const parametroId = request.params.id
    const resposta =  {msg : "recebi um PUT"}
    response.status(200).send(resposta)
})


app.delete ('/usuarios/:id' , (request , response) =>{
    const parametroId = request.params.id
    const resposta =  {msg : "recebi um DELETE"}
    response.status(200).send(resposta)
})




app.listen(portaServico, () =>{
    console.log("Api rodando na porta " + portaServico);
})