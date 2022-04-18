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
    addFilme: (req, res) => {
        /*
        {
            "id": "fc0f5d74b0ee816a",
            "cartaz": "fc0f5d74b0ee816a.jpg",
            "titulo": "Casa Gucci",
            "generos": [
                "Drama"
            ],
            "censura": 14,
            "trailer": "https://youtu.be/juSv4y5_0Xo",
            "sinopse": "Casa Gucci é inspirada na chocante história real do império da família por trás da italiana casa de moda Gucci. Abrangendo três décadas de amor, traição, decadência, vingança e em última instância, assassinato, vemos o que um nome significa, o que vale e quão longe uma família para se manter no controle."
        }
        */
        
        // 1 - Criar um objeto com a estrutura acima e guardar numa var filme:
        //      1.1: Criar o ID
        let novoId = uniqid();

        //      1.2: Capturar os generos do filme
        let generos = [];
        for(let i in req.body){
            if(req.body[i] == "on"){
                generos.push(i);
            }
        }

        //      1.3: Todo o resto
        let filme = {
            "id": novoId,
            "cartaz": req.file.filename,
            "titulo": req.body.titulo,
            "generos": generos,
            "censura": req.body.censura,
            "trailer": req.body.trailer,
            "sinopse": req.body.sinopse
        }


        // 2 - Salvar o objeto filme no arquivo filmes.json
        //      2.1 - Importar o array de filmes
        const filmes = require('../database/filmes.json');

        //      2.2 - Adicionar o filme ao final do array de filmes
        filmes.push(filme);

        //      2.3 - salvar todo o array de filmes no arquivo filmes.json
        fs.writeFileSync(
            __dirname + '/../database/filmes.json',
            JSON.stringify(filmes,null,4)
        )

        // Responder o cliente
        res.send("Filme adicionado.")
    }
}
module.exports = FilmesController;