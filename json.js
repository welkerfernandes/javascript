//transformar lista em json
const todos = 
[
	{
		id:1,
		nome:"welker",
		idade:31,
	},
	{
		îd:2,
		nome:"dani",
		idade:29,
	},
	{
		id:3,
		nome:"marilda",
		idade:63,
	}
];

const toJson = JSON.stringify(todos)
//console.log(toJson)

//transformar json em lista

const todoslist = JSON.parse(toJson)
console.log(todoslist)