// Importação da biblioteca Express
const express = require('express');
const res = require('express/lib/response');

// Criando um servidor(app)
const servidor = express();

// Criando as rotas do servidor
servidor.get('/', (req, res) => {
    console.log("Alguem fez uma requisição...")
    res.send('Você está na página inicial!')
});

servidor.get('/filmes', (req, res) => {
    console.log("Processando a requisição...")
    res.send('A página filmes está aberta!')
});

servidor.get('/generos', (req, res) => {
    res.send('Página generos tá on!')
});

servidor.get('/filmes/:posicao', (req, res) => {
    // Capturei a posição do filme desejado
    let posicao = req.params.posicao;
    // Carregar o array de filmes
    const filmes = require('./database/filmes.json');
    // Enviar para o cliente o que foi pedido
    res.send(filmes[posicao])
});

servidor.get('/busca/:trecho', (req, res) => {
    // 1: Salvar o trecho na variável 'trecho';
    let trecho = req.params.trecho;
    // 2: Importar o conteúdo de filmes.json para uma constante 'filmes';
    const filmes = require('./database/filmes.json');
    // 3: Filtrar o array de filmes, somente os filmes que possuam o trecho no título;
    // (Lembrem da função filmes.filter)
    
    // 4: Enviar para o cliente (usando res.send) o resultado da filtragem.
    res.send(filmes.filter())
})

// Por o servidor para 'ouvir' as requisições
servidor.listen(3000)