const mensagem = 'Oi mundo';

console.log(mensagem.length)

const first_name = 'Welker'
const last_name = 'Cunha'

//forma mais moderna
console.log(`Meu nome é ${first_name} ${last_name}`)

console.log(`Meu nome é ${first_name.toUpperCase()} ${last_name.toLowerCase()}`)

//aqui estou colocando elementos em uma lista
const names = "Welker, Daniela, Marilda"
console.log(names.split(','))

console.log(names.split(',')[0])