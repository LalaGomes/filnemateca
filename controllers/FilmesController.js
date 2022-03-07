const FilmesController = {
    index: (req, res) => {
        // Carregar todos os filmes
        const filmes = require('../database/filmes.json');

        //Renderizar a view index.ejs(ainda não existe) passando os filmes para ela
        res.render('index.ejs', {filmes});
    },
    listarFilmes: (req, res) => {
        // Importando os filmes
        const filmes = require('../database/filmes.json')

        // Enviar os fimes para o cliente
        res.send(filmes);
    },
    buscarPelaPosicao: (req, res) => {
        let posicao = req.params.posicao;
        const filmes = require('../database/filmes.json');
        // Enviar para o cliente a view com o filme da posição desejada
        let filme = filmes[posicao];
        res.render('filme.ejs', {filme})
    },
    buscarPorTrecho: (req, res) => {
        let trecho = req.query.busca;
        const filmes = require('../database/filmes.json');
        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let resultadoDaBusca = filmes.filter(filtradora);
        res.render('index.ejs', {filmes: resultadoDaBusca});
    },
    buscarPorId: (req,res)=>{},
    buscarPorGenero: (req,res)=>{},
}

module.exports = FilmesController;