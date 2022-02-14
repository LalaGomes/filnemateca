// Importe o express
const express = require('express');

// Criar o roteador com express.Router
const router = express.Router();

// Importando FilmesController
const FilmesController = require('../controllers/FilmesController');

router.get('/', FilmesController.index);
// listarFilmes
router.get('/filmes', FilmesController.listarFilmes);
// genero
/*router.get('/generos', FilmesController.genero);*/
// função pelaPosicao
router.get('/filmes/:posicao', FilmesController.buscarPelaPosicao);
// buscarPorTrecho
router.get('/busca/:trecho', FilmesController.buscarPorTrecho);
// buscarPorId
router.get('/buscaporid/:id', FilmesController.buscarPorId);
// buscarPorGenero
router.get('/generos/:genero', FilmesController.buscarPorGenero );

// função listarFilmes
// função pelaPosição
// função buscarPorTrecho
// função buscarPorId
// função buscarPorGenero


// Exportar o roteador
module.exports = router;