let app = require('./config/server') // IMPORTANDO O SERVIDOR EXPRESS CONFIGURANDO 

let rotaHome = require('./routes/home') // INPORTAR A ROTA HOME PARA O INDEX
rotaHome(app)

let rotaCliente = require('./routes/cliente')
rotaCliente.getClientes(app)

app.listen(3000, function(){
    console.log('servidor rodando na porta 3000')
})