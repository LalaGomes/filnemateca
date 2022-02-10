const FilmesController = {
    index: (req, res) => {
        console.log("Alguem fez uma requisição...")
        res.send('Você está na página inicial!')
    },
    listarFilmes: (req, res) => {
        console.log("Processando a requisição...")
        res.send('A página filmes está aberta!')
    },
    genero: (req, res) => {
        res.send('Página generos tá on!')
    },
    buscarPelaPosicao: (req, res) => {
        let posicao = req.params.posicao;
        const filmes = require('../database/filmes.json');
        res.send(filmes[posicao])
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