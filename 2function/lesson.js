// function fn() {
// 	var sum = 0;
// 	for(var i = 0; i < arguments.length; i++) {
// 		sum = sum + arguments[i];
// 	}

// 	return sum; // если не прописать return, то выдаст undefind
// }

// var result = fn(2, 4, 10, 15, 25);
// // console.log(fn(2, 4, 10, 15, 25));

// //declaration - объявление
// function fn1(a, b) {
// 	return a + b;
// }

// //expression - выражение
// var fn2 = function(a, b) {
// 	return a + b;
// }

// var result1 = fn1(2, 2), result2 = fn2(2, 2)

// console.log(result1);
// console.log(result2);

// function fn(otherFn) {// function declaration
// 	otherFn();
// }

// //стрелочные функции
// var fn2 = () => console.log("привет!"); //если в функции одно выражение
// // стрелочные функции всегда function expression


// fn(() => console.log("привет!"));

// var a = [1, 2, 3, 4, 5];
// var a2 = a.map(function(n) {
// 	return n * n;
// });

// var a3 = a.map(n => n * n * n);

// console.log(a);
// console.log(a2);
// console.log(a3);

