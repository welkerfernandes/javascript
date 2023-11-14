//loop for
for(let index = 0;index < 10;index++){
	//console.log(index)
}

//loop com lista
const lista = ['ferrari','tesla','mecedes'];

for (let i = 0; i < lista.length;i++){
	//console.log(lista[i])
}

//bem melhor usar
for (let list of lista){
	//console.log(list)
}

//outro method com mesmo resultado mas da para adicionar a index da lista
lista.forEach(function(item,index){
	//console.log(index)
	//console.log(item)
});

//while se a condição for verdadeira

let index = 0;
while(index < 10){

	//console.log(index)
	index++
}


//for in para trasbalhar com objetos

const person = {
	nome:'welker',
	idade:31
}

//nãoé muito performático
for (pror in person){
	console.log(person[pror])
}