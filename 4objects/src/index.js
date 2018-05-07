/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
	for (var i = 0; i < array.length; i++){
		fn(array[i], i, array)
	}
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
	var result = [];
	for (var i = 0; i < array.length; i++){
		result[i] = fn(array[i], i, array);
	}
	return result;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
	var result = initial || array[0];

	for (var i = initial ? 0 : 1; i < array.length; i++){
		result = fn(result, array[i], i, array)
	}
	return result;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
	delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
	for (var key in obj) {
		if (key === prop) return true;
	}
	return false;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
	var result = [];
	for (var key in obj) {
		result.push(key);
	}
	return result;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
	var result = [];
	for (var key in obj) {
		result.push(key.toUpperCase());
	}
	return result;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
	var result = [],
		from1, end;
	if (from < 0) {
		if (array.length + from >= 0) {
			from1 = array.length + from;
		} else {from1 = 0};
	} else if (from > -1) {
		from1 = from;

	} else {
		from1 = 0;
	}

	if (to < 0) {
		end = array.length+ to;
	} else if (to > -1) {
		if (to > array.length) {to = array.length}; 
		end = to;

	} else {
		end = array.length;
	}

	for (var i = from1; i < end; i++) {
		result.push(array[i]);
	}
	return result;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
return new Proxy(obj, {
		get(target, prop) {
	    return target[prop];
	  },
	  set(target, prop, value) {
	    target[prop] = value * value;
	    return true;
	  }
	});
}


export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
