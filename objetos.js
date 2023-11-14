const person = {
	nome:'Welker',
	sobrenome:'fernandes',
	idade:31,
	hobbies:['Tiktok','Jogar video game'],
}


const {nome, sobrenome,idade,hobbies} = person

const variavel = `${nome} ${sobrenome}`


//console.log(variavel)

person.dog = 'simba'

//console.log(person)

//lista com vários objstos

const todos = [
	{
		id:1,
		description:'estudar',
		tarefa:false,
	},
	{
		id:2,
		description:'ler',
		tarefa:true
	}
]

const descr = todos[1].description
console.log(descr)