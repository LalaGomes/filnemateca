const FilmesController = {
    index: (req, res) => {
        console.log("Alguem fez uma requisição...")
        res.send('Você está na página inicial!')
    },
    listarFilmes: (req, res) => {
        // Importando os filmes
        const filmes = require('../database/filmes.json')

        // Enviar os fimes para o cliente
        res.send(filmes);
    },
   /* genero: (req, res) => {
        res.send('Página generos tá on!')
    },*/
    buscarPelaPosicao: (req, res) => {
        let posicao = req.params.posicao;
        const filmes = require('../database/filmes.json');
        // Enviar para o cliente a view com o filme da posição desejada
        let filme = filmes[posicao];
        res.render('filme.ejs', {filme})
    },
    buscarPorTrecho: (req, res) => {
        let trecho = req.params.trecho;
        const filmes = require('../database/filmes.json');
        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let resultadoDaBusca = filmes.filter(filtradora);
        res.send(resultadoDaBusca);
    },
    buscarPorId: (req,res)=>{},
    buscarPorGenero: (req,res)=>{},
}

module.exports = FilmesController;