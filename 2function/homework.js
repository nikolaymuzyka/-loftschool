// //1
// function returnFirstArgument(arg) {
// 	return arg;
// };

// console.log(returnFirstArgument(15));


// //2
// function defaultParameterValue(a, b) {
// 	return (a + b) || (a + 100);
// }

// console.log(defaultParameterValue(10, 11));


// //3
// function returnArgumentsArray() {
// 	var arr = [];

// 	for (var i = 0; i < arguments.length; i++) {
// 		arr.push(arguments[i]);
// 	}

// 	return arr;
// }

// console.log(returnArgumentsArray(1, 2, 10, 20, 50, "asd", "asdf"));


//4
// function returnFnResult(fn) {
// 	return fn();
// }

// console.log(returnFnResult(function() {
// 	return "hi people!"
// }));


//5
// function returnCounter(number) {
// 	var a;
// 	if (!isNaN(number)) {a = number}
// 		else a = 0;
// 	return function () {
// 		return ++a;
// 	};
// }

// var count = returnCounter(1);
// console.log(count(), count(), count());

// var count1 = returnCounter();

// console.log(count1, count1);

function bindFunction(fn) {
	// var args = [];

	// for (var i = 1; i < arguments.length; i++) {
	// 	args.push(arguments[i]);
	// }

	// var func = fn.bind(null, args);

	// return func;

	var bindArgs = [].slice.call(arguments, 1)
	return function() {
		return fn.apply(null, bindArgs);
	};
}

var g = bindFunction(function() {
						console.log("привет");
						for(var i= 0; i < arguments.length; i++) {
							console.log(arguments[i])
						}
					}, 10, 20, 30);
g();
console.log(g);