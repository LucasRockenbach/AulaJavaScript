let mysql = require('mysql')

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'aula0'
    })
}