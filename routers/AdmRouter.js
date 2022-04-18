//Importar o express:
const express = require('express');

//Importando o controller
const AdmController = require('../controllers/AdmController');

//Criando o roteador:
const router = express.Router();

//Criando a rota:
router.get('/login', AdmController.mostralogin);

router.post('/login', AdmController.login);

router.get('/esqueci', AdmController.mostraEsqueci);

router.post('/esqueci', AdmController.lembrarSenha);

router.get('/admin', AdmController.mostraAdmin);

//Exportando o roteador:
module.exports = router;