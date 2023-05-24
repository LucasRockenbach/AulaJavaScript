let http = require('http');

let servidor = http.createServer(function(req, res){
	let endereco = req.url;
	
	if(endereco == "/listar"){
		res.end("<html><head><title>Pagina Listar</title></head>"+
		"<body><h1>Pagina de listagem!</h1></body></html>");	
	}else if(endereco == '/cadastrar'){
		res.end("<html><head><title>Pagina Cadastrar</title></head>"+
		"<body><h1>Pagina de cadastro!</h1></body></html>");
	}else{
		res.end("<html><head><title>Pagina inicial</title></head>"+
		"<body><h1>Pagina inicial!</h1></body></html>");		
	}
});

servidor.listen(8000);