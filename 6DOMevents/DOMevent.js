// const loftschoolLink = document.querySelector('#loftschoolLink');
const myButton = document.querySelector('#myButton');
const myDiv = document.querySelector('#myDiv');
const myList = document.querySelector('#myList');
const myInput = document.querySelector('#myInput');


// const myLink = document.querySelector('#myLink');

// console.log(loftschoolLink);
// loftschoolLink.addEventListener('click', function() {
// 	alert('кликнули по ссылке');
// });

// const clickHandler1 = () => { 
// 	console.log('Нажали на кнопку');
// };

// const clickHandler2 =() => {
// 	console.log('еще один обработчик');
// };

// добавление события
// myButton.addEventListener('click', (event) => {
// 	console.log('событие прошло через button');
// 	console.log(event.target.id); // === event.target.getAttribute('id')
// 	console.log(event.eventPhase);
// 	//event.stopPropagation();
// });
// myButton.addEventListener('click', clickHandler1);

// myButton.addEventListener('click', clickHandler2);

// удаление события

// myButton.removeEventListener('click', clickHandler1);

// document.body.addEventListener('click',() => {
// 	console.log('событие прошло через body');
// }, true);// обработчик срабатывает на погружение

// document.body.addEventListener('click',(event) => {
// 	console.log('событие прошло через body');
// 	console.log(event.type); // имя события
// 	console.log(event.eventPhase); // на какой фазе произошло событие
// 	console.log(event.target); // указывает элемент для которого событие было предназначено
// 	console.log(event.currentTarget); //указывает элеиент в котором навешен обработчик события	
// }); 



// myLink.addEventListener('click', (event) => {
// 	event.preventDefault();
// });

// myButton.addEventListener('click', () => {
// 	const event = new CustomEvent('myEvent');
// 	myDiv.dispatchEvent(event);
// });

// myDiv.addEventListener('myEvent', () =>{
// 	console.log("на div произошло событие myEvent");
// });

// function handler(event) {
// 	console.log(event.type, event);
// 	if (event.key >= 0 || event.key <= 9) {
// 		console.log('цифра');
// 	} else {
// 		event.preventDefault();
// 	}
// };

// myButton.addEventListener('mousedown', handler); // нажата кнопка мыши
// myButton.addEventListener('mouseup', handler);// отпущена кнопка мыши
// myButton.addEventListener('click', handler); // клик кнопкой мыши
// myButton.addEventListener('dblclick', handler); // двойной клик кнопкой мыши
// myButton.addEventListener('mouseover', handler); // курсор вошел в рамки элемента
// myButton.addEventListener('mouseenter', handler); // курсор вошел в рамки элемента(событие не всплывает)

// let counter	= 1;

// myList.addEventListener('click', (event) => {
// 	if (event.target.tagName === 'LI') {
// 		console.log('кликнули на элемент списка', event.target.textContent);
// 	}
// });

// myButton.addEventListener('click', () => {
// 	const li = document.createElement('li');
// 	li.textContent = 'элемент' + counter++;
// 	myList.appendChild(li);
// }); 

// myInput.addEventListener('keydown', handler);
// myInput.addEventListener('keyup', handler);
// myInput.addEventListener('keypress', handler);
// myInput.addEventListener('input', handler);

// document.addEventListener('DOMContentLoaded', () =>{
// 	console.log('DOM дерево готово к работе');
// });
// window.addEventListener('load', () => {
// 	console.log('страница загружена');
// });

function once(target, fn) {
	let handler = function(event) {
		console.log(event.type);
		this.removeEventListener(event.type, handler);
		fn();
	}

	target.addEventListener('click', handler);
}

once(myButton, function() {console.log('привет и пока');});