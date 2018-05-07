// // var a = ['привет', 'loftschool'];
// // //Array == Object + exotic behaviour

// // console.log(a.length);
// // a[a.length] = 123;
// // console.log(a.length);

// // a.length = 1;
// // a[10] = 'фывфывф'

// // console.log(a);



// // a.forEach(function(value) {
// // 	console.log(value);
// // });

// var arr = ['привет', 'loftschool', '!!!', '@@@'];
// arr.prop = '123';

// console.log(arr.prop);

// delete arr.prop;
// console.log(arr.prop);

// arr.splice(1, 2); //удалить элементы массива с индекса 1  2 элемента
// console.log(arr);
// arr.splice(1, 1, 'some value', 1, 2, 3, 4); // удалить и вставить элементы
// console.log(arr);

// var deleted = arr.splice(1, 5); // возвращает удаляемые элементы
// console.log(deleted);

function createProxy(obj) {
	get: function(target, prop) {
    alert(`Чтение ${prop}`);
    return target[prop];
  },
  set: function(target, prop, value) {
    alert(`Запись ${prop} ${value}`);
    target[prop] = value * value;
    return true;
  }
}

obj = {};
obj = createProxy(obj);

obj.a = 2;
obj.b = 5;
console.log(obj.a, obj.b);
