// Importando o multer
const multer = require('multer');

// Criando um Storage
const storage = multer.storage(
    {
        destination: (req, file, cb)=>{
            cb(null, "/public/img")
        } ,
        filename: (req, file, cb)=>{
            cb(null, `${Date.now()}=${file.fieldname}`);
        }
    }
)

// Criando o mmiddleware do multer
const middleware = multer({storage});

// Exportando o middleware
mpodule.exports = middleware;