function parimp(n){
    if (n % 2 == 0){
        return 'par '
    }else {
        return 'impar'
    }
}

let valor = parimp(459)
console.log(valor)

function soma(n1 = 0, n2 = 0 ){ // parametros predefinidos caso nao seja passado um valor ele valera 0
    return n1 + n2 
}

console.log(soma(8,))

let v = function(x){ //uma variavel que recebe o valor de uma função 
    return 2 * x
}

console.log(v(5))

function fatorial (n){ // RECURSIVIDADE é quando faz a chamada da propria função dentro dela mesma
    if (n == 1 ){
        return 1

    }else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))