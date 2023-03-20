let num = [7,5,8]

num.push(8) //acressentando valores nos arrays
num.push(12) 

 //for (let i = 0; i < num.length; i++){

 //   console.log(`a posição ${i} tem valor ${num[i]}`)
 //}

for (let i in num){ // maneira mais simples de fazer mas que funciona apenas para arrays
    console.log(`a posição ${i} tem valor ${num[i]}`)
}

console.log(`esse array tem ${num.length} posições `) // LENGTH função para mostrar quantas posicoes tem
num.sort()// função para organizar em ordem crescente 

console.log(`o valor 12 esta na posição ${num.indexOf(12)}`)



