const FilmesController = {
    index: (req, res) => {
        console.log('usando o index (^~^)')
        const filmes = require("../database/filmes.json");
        res.render('index.ejs', { filmes });
    },
    listarFilmes: (req, res) => {
        console.log('listando filmes..');
        const filmes = require('../database/filmes.json');
        res.send(filmes);
    },
    buscarPorTrecho: (req, res) => {
        console.log('usando o servidor busca..');

        // 1: Salvar o trecho buscado na variável 'trecho';
        let trecho = req.query.busca;

        // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'

        const filmes = require('../database/filmes.json');

        // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo. => (lembrem da função filmes.filter)

        const filmesTitulo = filmes.filter(function(valorDaBusca) {
                return valorDaBusca.titulo.includes(trecho);
            })
            //nesta constante eu fiz com que o cliente que digita-se qualquer coisa na barra de pesquisa retornasse os nomes dos titulos conrrespondentes. e como?
            //na contaste eu fiz com que recebe-se todos filmes só que ultilizando o filter com uma função recebendo como parametro um nome que vai ser por onde a funçao vai funcionar, e fiz com q retorna-se o parametro+todos os títulos dos filmes mas apenas as letras que o cliente for digitar na barra de pesquisa

        // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.
        res.render('index.ejs', { filmes: filmesTitulo })
    },
    buscarPorGenero: (req, res) => {
        console.log('servidor gêneros está sendo usado! ;)');
        let trechoGeneros = req.params.trechoGeneros;
        const filmes = require('../database/filmes.json');
        const filmesGeneros = filmes.filter((genero) => genero.generos.includes(trechoGeneros))
        res.send(filmesGeneros);
    },
    buscarPelaPosicao: (req, res) => {
        console.log('servidor de busca por posição está funcionando B)');
        let posicao = req.params.trechoId;
        const filmes = require('../database/filmes.json');
        let filme = filmes[posicao];
        res.render('filme.ejs', { filme });
    },
    buscarPorId: (req, res) => {
        console.log('servidor de busca por id está funcionando.....');
        let id = req.params.id;
        const filmes = require('../database/filmes.json');
        let filtradora = filme => {
            if (filme.id == id) {
                return true;
            } else {
                return false
            }
        }
        const filme = filmes.find(filtradora);
        res.render('filme.ejs', { filme });
    },
    addFilme: (req, res)=>{

        let generos = [];
        for(let i in body){
            if(body[i] == "on"){
                generos.push(i);
            }
        }

    }
}
module.exports = FilmesController;