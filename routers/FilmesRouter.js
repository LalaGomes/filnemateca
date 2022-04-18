// Importar a biblioteca express
const express = require('express');

//Importar o Middleware;
const middlewareGuardaBusca = require('../middlewares/middlewareGuardaBusca');

// Importando o filmes controllers;
const FilmesController = require('../controllers/FilmesController')
    // Criar o roterador com express.Router
const router = express.Router();
//existe router no express por isso foi chamado com . .
//criando as rotas do servidor 

//criação de rotas
router.get('/', FilmesController.index);
router.get('/', FilmesController.listarFilmes);

router.get('/buscargeneros/:trechoGeneros', FilmesController.buscarPorGenero);

router.get('/filmes/:id', FilmesController.buscarPorId);

router.get('/buscar', middlewareGuardaBusca, FilmesController.buscarPorTrecho)

router.get('/buscarid/:trechoId', FilmesController.buscarPorId);


//exportar o roteador
module.exports = router;