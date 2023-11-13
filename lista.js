const lista = ["Felipe","João","Maria",10,false];

// para ver a posição da lista
console.log(lista[1])

//aqui adicionei no fim da lista
lista.push('Catarro')

console.log(lista)


//adicionei no inicio da lista
lista.unshift(201)
console.log(lista)

//remover valor da lista
lista.pop();
console.log(lista)

// alterar valor de um elemento da lista
lista[0] = 'Gustavo'
console.log(lista)

//verificar o indice de x elementos
console.log(lista.indexOf("Felipe"))

//ordernar lista
console.log(lista.sort())

//contar quantos itens tem na lista
console.log(lista.length)

//verificar se variavel é uma lista
const lista_is_array = Array.isArray(lista)
console.log(lista_is_array)