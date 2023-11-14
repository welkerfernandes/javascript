const numeros = [1,2,3,4,5];

//map
const number_mulpliply = numeros.map(function(item){
	return item * 2;
});

//console.log(number_mulpliply)




//method filter
const ages = [8,13,22,31,54,21,34,40];
const evenAges = ages.filter(function(item){
	return item % 2 === 0
});

//console.log(evenAges)

//method reduce
const aqui = [12,54,85,60,23,22,12,54];
const sumAges = aqui.reduce(function(valor_atual,accumulator){
	return accumulator + valor_atual
},0);

console.log(sumAges)