const express = require('express');
const path = require('path'); // Importar o m�dulo path para facilitar o gerenciamento de caminhos
const app = express();
const portaServico = 3000;
const RouterUsuario = require("./router/RouterUsuario");
const RouterResposta = require("./router/RouterResposta");

app.use(express.json());
app.use(express.static('js'));

// Servir arquivos est�ticos de diret�rios espec�ficos
app.use('/html', express.static(path.join(__dirname, 'view/html')));
app.use('/css', express.static(path.join(__dirname, 'view/css')));

// Rota para servir index.html na raiz do servidor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/html/paginaInicial.html')); // Ajuste o caminho conforme necess�rio
});

const roteadorUsuario = new RouterUsuario();
const roteadorResposta = new RouterResposta();

app.use('/usuarios', roteadorUsuario.criarRotasUsuarios());
app.use('/respostas', roteadorResposta.criarRotasResposta());


app.listen(portaServico, () => {
    console.log("Api rodando na porta " + portaServico);
});
