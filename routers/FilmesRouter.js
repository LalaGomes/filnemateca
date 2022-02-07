// Importe o express
const express = require('express');

// Criar o roteador com express.Router
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Alguem fez uma requisição...")
    res.send('Você está na página inicial!')
});

router.get('/filmes', (req, res) => {
    console.log("Processando a requisição...")
    res.send('A página filmes está aberta!')
});

router.get('/generos', (req, res) => {
    res.send('Página generos tá on!')
});

router.get('/filmes/:posicao', (req, res) => {
    // Capturei a posição do filme desejado
    let posicao = req.params.posicao;
    // Carregar o array de filmes
    const filmes = require('../database/filmes.json');
    // Enviar para o cliente o que foi pedido
    res.send(filmes[posicao])
});

router.get('/busca/:trecho', (req, res) => {
    // 1: Salvar o trecho na variável 'trecho';
    let trecho = req.params.trecho;
    // 2: Importar o conteúdo de filmes.json para uma constante 'filmes';
    const filmes = require('../database/filmes.json');
    // 3: Filtrar o array de filmes, somente os filmes que possuam o trecho no título;
    // (Lembrem da função filmes.filter)
    let filtradora = filme => {
        return filme.titulo.includes(trecho);
    }
    let resultadoDaBusca = filmes.filter(filtradora);
    // 4: Enviar para o cliente (usando res.send) o resultado da filtragem.
    res.send(resultadoDaBusca);
})

router.get('/buscaporid/:id', (req,res)=>{});

router.get('/generos/:genero', (req,res)=>{});


// Exportar o roteador
module.exports = router;