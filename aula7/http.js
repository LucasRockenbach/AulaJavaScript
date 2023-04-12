const { setDefaultResultOrder } = require('dns');
let http = require ('http')

let servidor = http.createServer(function(request, response){
    console.log("entrou em create server")
    response.end('<html> <head> <title> pagina inicial do sistema </title> </head> <body> <h1> aula node </h1> </body> </html>')

    let urlSolicitada = request.url
    console.log(`url: ${urlSolicitada}`)

    if(urlSolicitada == '/cadastracliente'){
        response.end('<html> <head> <title> pagina inicial do sistema </title> </head> <body> <h1> cadastro de cliente </h1> </body> </html>')

    }else if (urlSolicitada == '/cadastrafornecedor'){
        response.end('<html> <head> <title> pagina inicial do sistema </title> </head> <body> <h1> cadastro fornecedor </h1> </body> </html>')

    }else{
        response.end('<html> <head> <title> pagina inicial do sistema </title> </head> <body> <h1> nao encontrado </h1> </body> </html>')

    }
});     

servidor.listen(3000);
