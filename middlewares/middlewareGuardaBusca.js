//importar biblioteca de mexer com os arquivos
const fs = require('fs');
module.exports = (req, res, next) => {
    //capturar o trecho buscado..
    let trechoBuscado = req.query.busca + "\n";

    //Salvar o trecho buscado no final de um arquivo.
    fs.writeFileSync("./trechosBuscados.txt", trechoBuscado, { flag: 'a+' })

    //passando a requisição à diante;
    next()

}