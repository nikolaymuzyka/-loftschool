// Global
// --c, fn, result

//function fn
// --a, b, arguments, fn

//function fn2
// -- arguments, fn2

// function fn2() {
// 	console.log("привет!");
// }

// var c = 10;

// function fn(a, b) {
// 	return a + b + c;
// }

// var result = fn(2, 4);

// console.log(result);

// Global (a, fn)
	// fn (b, c, argiments, fn)
		// fn2 (d, arguments, fn2)

// var a = 1;

// function fn(b, c) { // b = 10, c =100
// 	function fn2(d) { // d = 1000
// 		return a + b + c + d
// 	}

// 	return fn2(1000);
// }

// console.log(fn(10, 100));


// function filter(arr, someFn) {
// 	var result = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (someFn(arr[i]) === true) {
// 			result.push(arr[i])
// 		}
// 	}

// 	return result;
// }

// var a = [1, 5, 6, 6, 4, 5, 34, 10];

// function greater(than) { // than = 7
// 	return function(number) {
// 		return number > than;
// 	}
// }



// var result1 = filter(a, greater(7));
// var result2 = filter(a, greater(5));

// console.log(result1);
// console.log(result2);


// for(var i = 1; i  <= 10; i++) {
// 	var result = filter(a, greater(i));
// 	console.log(i, result);
// }



//IIFE - моментально вызывающаяся функция

(function(a, b) {
	var hello = "хорошего дня";
	console.log("привет", a, " и ", b, "! ", hello);
})("Саша", "Сережа");