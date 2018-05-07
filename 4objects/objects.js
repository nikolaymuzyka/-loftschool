var obj = {
	name: 'Сергей',
	lastname: 'Мелюков',
	otherProp: function(a,b) {
		return a + b;
	}
};

// var r = obj.name;
// var prop = 'name';

// console.log(r);
// console.log(obj.name); // заранее надо знать имя свойства
// console.log(obj['name']);
// console.log(obj[prop]); // вместо имени свойства можно использовать переменную

// console.log(obj);

// obj.someOtherProp = 100; // создание нового свойства
// obj.someOtherProp = 'привет'; // перезапись свойства объекта
// console.log(obj);


// for (var prop in obj) { //цикл для перебора свойств объекта
// 	console.log(prop + ': ' + obj[prop]); // вывод имени свойства объекта и его значения
// }

// console.log(obj);

// delete obj.someOtherProp; //удаление свойства объекта

// console.log(obj);

// console.log(obj.otherProp(2, 3));


// //проверки наличия свойств в объекте
// var exists = 'otherProp' in obj;
// var exists2 = obj.hasOwnProperty('otherProp');

// if (exists && exists2) {
// 	console.log('такое свойство есть');
// } else {
// 	console.log('такого свойства нет');
// };

// Object.defineProperty(obj, 'prop', {
// 	configurable: false, // нельзя изменять флаги свойства
// 	enumerable: true,    // свойство будет видно циклу for и в Object.keys()
// 	value: 'loftschool', // значение свойства
// 	writable: true       // можно изменять значение свойства
// });

// for (var prop in obj) {
// 	console.log(prop);
// }

// console.log('>>>>', obj.prop);

// obj.prop = 'привет';
// console.log(obj.prop);

// var obj1 = {someProp: 'someValue'};
// var obj2 = {someProp: 'someValue'};

// var equal = obj1 == obj2;

// console.log(equal);

// var obj3 = obj1;
// console.log(obj3 == obj1);

var object = {some: 'value'};
// toString, valueOf - служебные методы

console.log(obj + 'hellow', obj.toString() + 'hellow');
