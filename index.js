// Importação da biblioteca Express
const express = require('express');

// Importando os roteadores
const FilmesRouter = require('./routers/FilmesRouter');

// Criando um servidor(app)
const servidor = express();

// Configuração do Template Engine
servidor.set('view engine','ejs');

// Usando o FilmesRouter
servidor.use('/', FilmesRouter);

// Por o servidor para 'ouvir' as requisições
servidor.listen(3000)