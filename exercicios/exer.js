let num = document.querySelector('input#fnumb')
let lista = document.querySelector('select#flista')
let finalizar = document.querySelector('div#finalizar')
let valores = []

function isNumero(n){
     if(Number(n) >= 1 && Number(n) <= 100){    
        return true
     }else {
        return false 
     }
}
function inLista(n, 1 ){
    if(lista.indexOf(Number(n)) != -1){
        return true 
    }else{
        return false  
    }

}

function adicionar(){
    if (isNumero(num.value) && ! inLista(num.value, valores)){
        window.alert('tudo certo ')
    }else
    window.alert('valor invalido ou ja colocado na lista')

}