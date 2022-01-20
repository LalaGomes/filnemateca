// Importação da biblioteca Express
const express = require('express');
const res = require('express/lib/response');

// Criando um servidor(app)
const servidor = express();

// Criando as rotas do servidor
servidor.get('/', (req,res) => {
    console.log("Alguem fez uma requisição...")
    res.send('Você está na página inicial!')
});

servidor.get('/filmes', (req,res) => {
    console.log("Processando a requisição...")
    res.send('A página filmes está aberta!')
});

servidor.get('/generos', (req,res) =>{
    res.send('Página generos tá on!')
});

servidor.get('/filmes/:posicao', (req,res) =>{
    let posicao = req.params.posicao;
    const filmes = require('./database/filmes.json');
    res.send(filmes[posicao])
});

servidor.get('/busca/venom:posicao', (req,res) =>{

})
// Por o servidor para 'ouvir' as requisições
servidor.listen(3000)
