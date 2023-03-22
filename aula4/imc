var altura, peso

function calculaValorIMC(altura, peso){
    return peso / (altura * altura)
}
function valorIMC(alt, pes){
    let valorIMC = calculaValorIMC(alt,pes);

    console.log("o valor do imc é " + valorIMC)

    if ( valorIMC < 18.5 ){
        console.log("voce esta magro ")
    }else if (valorIMC >= 8.5 && valorIMC < 25){
        console.log("voce normal")
    }else if (valorIMC > 25 && valorIMC < 30){
        console.log('voce esta acima do peso')
    }
}
function calculaIMCRemoto(){
    let altInformar = document.querySelector("input.altura") 
    let pesInformar = document.querySelector("input.peso")

    console.log("****calculando imc****")
    valorIMC(altInformar, pesInformar)
}

altura = 1.78
peso = 80

valorIMC(altura, peso)
