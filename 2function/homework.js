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


// //4
// function returnFnResult(fn) {
// 	return fn();
// }

// console.log(returnFnResult(function() {
// 	return "hi people!"
// }));


//5
function returnCounter(number) {
	var a = number || 0;
	function fn(num) {
		return num + 1;
	}
	return (function (num) {
		return num + 1;
	})(a);
}

var count1 = returnCounter();

console.log(count1, count1);