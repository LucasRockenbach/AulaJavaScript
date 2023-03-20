let x = 12 // var x = 12

const name = "pedro"

x = 45 // alterei o valor de x 

const y = 12 // CONST o valor nao pode ser alterado igual no let
             // mais confiavel pois o valor nao pode ser alterado
             // pode ser trabalhada em bloco 

console.log(`o valor de X é:${x}`)
console.log(`o valor de y é:${y}`)
console.log(typeof(name))

if(true){
    let x = 34
    console.log(`o valor de x dentro do if é:${x}`) 
    // PODE-SE TRABALHAR COM VARIAVE EMBLOCO COM LET 
    //ELA TEM O MESMO NOME DA OUTRA VARIAVEL MAS VALORES DIFERENTES 
}