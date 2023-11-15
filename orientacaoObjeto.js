/*class Person{
	constructor(nome, sobrenome, idade){
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
	}

	getFullname(){
		return `${this.nome} ${this.sobrenome}`
	}

	speak(){
		return `Olá mundo eu tenho ${this.idade} de idade` 
	}
}


const person = new Person("Welker","Fernandes",31)

console.log(person)

nome_e_sobrenome = person.getFullname()

console.log(nome_e_sobrenome)

aqui = person.speak()
console.log(aqui)
*/
//herança
class Animal{
	constructor(nome){
		this.nome = nome
	}

	speak(){
		console.log(`${this.nome} fez algum barulho`)
	}
}


class Dog extends Animal{
	constructor(nome){
		super(nome);
	}

	speak(){
		console.log(`Dog ${this.nome} latiu`)
	}
}

const animal = new Animal('simba')
const dog = new Dog('Rex')
dog.speak();
