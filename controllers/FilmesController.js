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
    buscarPorId: (req,res)=>{
        // 1: Capturar o id do filme
        let id = req.params.id;

        // 2: Importar o conteúdo de filmes.json para uma constante
        const filmes = require('../database/filmes.json');

        // 3: Definir a função filtradora
        let filtradora = filme =>{
            if(filme.id == id){
                return true;
            } else {
                return false;
            }
        }

        // 4: Encontrar o filme que tem o id desejado 
        const filme = filmes.find(filtradora);

        // 5: Retornando a view de filme para o cliente
        res.render('filme.ejs', {filme})
    },
    buscarPorGenero: (req,res)=>{},
}

module.exports = FilmesController;