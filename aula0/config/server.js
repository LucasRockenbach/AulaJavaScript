
const express = require('express');
let app = express();

app.set('view engine', 'ejs') // EJS VISUALIZADOR PADRÃO 

app.use(express.static('views/static')) // CONFIGURANDO EXPRESS PARA ARQUIVOS 
app.use(express.json()) // CONFIGURANDO O EXPRESS PARA TRABALHAR COM JSONs
app.use(express.urlencoded({extend: true})) // CONFIGURANDO O EXPRESS PARA RECEBER FORMULARIOS EM HTML

module.exports = app //exporta