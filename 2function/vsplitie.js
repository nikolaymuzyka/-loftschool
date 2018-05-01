var a = 10, b;// b = undefind
console.log(a, "\n", b, "\n", c);
var c = 10; 

// console.log(a3);

// let a3 = 10;

//где бы не была объявлена переменная с помощью var
// она всплывает в начало кода

// разница между var и let : переменные объявленные через let
// не подвергаются всплытию

if (100 > 10) {
	var a1 = 10;
}
console.log(a1);

// if (100 > 10) { //переменные объявленные с помошью let видны только
// 	let b1 = 10;// в блоке в котором объявлены
// }
// console.log(b1);

const PI = 3.145;
//const работает как let только его нельзя изменять по всей программе

function defaultParameterValue(a, b) {
	return a + b;
}


console.log(defaultParameterValue(10, 1));
