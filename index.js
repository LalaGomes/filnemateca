// Importação da biblioteca Express
const express = require('express');

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
})
// Por o servidor para 'ouvir' as requisições
servidor.listen(3000)
