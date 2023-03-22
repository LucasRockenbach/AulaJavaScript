//criando função 
function primeira (){
    console.log("esse codigo foi inserido pela função")
}
function segunda (parametro1){
    console.log("o valor do parametro 1 é " + parametro1)
}
function terceira (valor1, valor2){
    let total = (valor1 + valor2)
    console.log("o valor da soma é " + total)
}
function quarta (valor1, valor2){
    let total = (valor1 - valor2)
    return total
}

function soma (valor1 , valor2){
    return valor1 + valor2
}
function subtrai (valor1 , valor2){
    return valor1 - valor2
}
function multiplica (valor1 , valor2){
    return valor1 * valor2
}


function calculo (tipo, valorA, valorB){
    if(tipo == "+"){
        let total = soma(valorA, valorB)
        console.log("total é " +  soma(valorA, valorB))
    }else if (tipo == "-"){
       let total = subtrai(valorA, valorB)
       console.log("total é " +  subtrai(valorA, valorB))

    }else{
        console.log("desculpa operação nao permitida ")
    }

}

function executa_x_vezes(quantidade){
    if(quantidade > 0 ){
        for (let i = 0; i < quantidade && quantidade < 1000; i++){
            console.log("execução numero " + i)
        }
        
    }
}




//executando a função 
primeira()


window.alert("vamos coçar?")


// executando a função passando parametro 
var parametro1 = "pedro"
segunda(parametro1)
let num1 = 20
let num2 = 22
terceira(num1, num2) // posso declarar a variavel e passar o valor dela PASSAGEM POR REFERENCIA 
terceira(55, 10) // posso passar o paramentro direto na função PASSAGEM POR VALOR NÃO AFETA A VARIAVEL
let retorno = quarta(800, 500)
console.log("o valor que retor da função 4 é " + retorno )

let vl1= 60, vl2 = 30

calculo("-", vl1, vl2 )
executa_x_vezes(10)
