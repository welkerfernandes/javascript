/*function sum(a,b){
	console.log(a + b)

}

sum(2,2)
*/
const arrow = (a,b = 10) => a + b;
const value = arrow(2)
console.log(value)