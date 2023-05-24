let express = require('express');

let app = express();
app.set('view engine', 'ejs');
app.use(express.static('views/static'));

let routeHome = require('./route/home')
routeHome.get(app)

let routeCadastrar = require('./route/cadastrar')
routeCadastrar.get(app)
routeCadastrar.p(app)
routeCadastrar.u(app)

let routeListar = require('./route/listar')
routeListar.get(app)



app.get('/', function(req, res){
	res.render('index');
});

app.get('/listar_cliente', function(req, res){
	res.render('pages/listar_clientes');
});

app.get('/cadastrar_cliente', function(req, res){
	res.render('pages/cadastrar_cliente');
});

app.listen(8000, function(req, res){
	console.log('Servidor rodando na porta 8000');
});