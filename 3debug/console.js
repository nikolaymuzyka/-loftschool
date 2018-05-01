// console.log("простое сообщение");
// console.log("Еще вариант", " простого сообщения");
// console.log("Простое сообщение с форматированием: ==[%s]== - ==[%s]==", "данные", "еще данные");

// console.info("Информационное сообщение");
// console.warn("предупреждение о чем-либо");
// console.error("какая-то ошибка");

// console.group("Группа 1");

// 	console.group("Группа 2");
// 		console.log("Сообщение 1");
// 		console.log("Сообщение 1");
// 		console.log("Сообщение 1");
// 	console.groupEnd();

// 	console.group("Группа 3");
// 		console.log("Сообщение 1");
// 		console.log("Сообщение 1");
// 		console.log("Сообщение 1");
// 	console.groupEnd();

// console.groupEnd();

// console.time('Таймер 1'); // замеряет время работы куска кода
// for (var i = 1; i <=20000000; i++) {
// 	var a = i / i;
// }
// console.timeEnd('Таймер 1');

console.profile('Профайл 1');
function f1() {
	console.log('1');
	function f2() {
		console.log('2');
		console.trace();
	}

	f2();

	console.log('3');
}

f1();
console.profileEnd('Профайл 1');