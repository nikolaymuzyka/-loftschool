function fn1() {
	console.log('до вызова fn2');
	fn2();
	console.log('после вызова fn2');
}

function fn2() {
	console.log('до вызова fn3');
	throw new Error();
	fn3();
	console.log('после вызова fn3');
}

function fn3() {
	console.log('Внутри fn3');
}
console.log('до вызова fn1');
try {
	fn1();
} catch (e) {
	console.log('errore');
}
console.log('после вызова fn1');


// стек вызовов call stack
// Global
// -- fn1
// ---- fn2
// ------ fn3
// -------- console.log

// когда работаешь с рекурсией, ВСЕГДА должно быть условие выхода из рекурсии!!!

// function rec(i) {
// 	console.log(i);
// 	if (i < 10) 
// 		rec(i+1);
// }
// console.log('до вызова rec');
// rec(1);
// console.log('после вызова rec');