let http = require('http')
let express = require('express')
let app = express()

app.set('views engine' , 'ejs')

app.get('/cadastrar', function(req, res){
    res.render('acoes/index')
})

/*  request solicitação do cliente  
    response resposta do servidor ao cliente    

let servidor = http.createServer(function(req, res) {
    let endereco = req.url
    console.log("url" + endereco)
    if(endereco == "/listar"){
        res.end('<HTML> <head> <title> Pagina de cadastro </title> </head> <body> <h1> Pagina de listagem </h1></body> </HTML>')
    }else if(endereco == "/cadastrar"){
        res.end('<HTML> <head> <title> Pagina inicial </title> </head> <body> <h1> Pagina de cadastro </h1></body> </HTML>')
    }else{
        res.end('<HTML> <head> <title> Pagina inicial </title> </head> <body> <h1> Pagina inicial </h1></body> </HTML>')
    }


})*/

servidor.listen(8000)