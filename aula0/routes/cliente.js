let bd = require('../config/dbConnection')()

module.exports.getClientes = function(app){
    app.get('/cliente', function(req,res){
        bd.query('select * from cliente;', function(erro, result){

            if(erro){
                console.log('erro' + erro)
            }

            res.json(result)
        })

        
    })
}

module.exports.createCliente = function(app){
    app.post('./cliente', function(req, res){
        const {nome, cpf} = req.body;
        console.log(nome + ' ' + cpf)

        const data = [nome.cpf]

        bd.query('insert into cliente (idcliente, nome, cpf) values (?,?,?);', data, function(erro, result){
            if(erro){
                console.log(erro)
            }
           res.status(201).json(result)
        })

        
    })
}