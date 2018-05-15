// DOM - Document Object Module

var container = document.querySelector('.container');
// console.log(container);

// console.log(container.childNodes); //возвращает все узлы
// console.log(container.children); //возвращает узлы типа элемент
// console.log(container.firstChild); //возвращает первый узел
// console.log(container.firstElementChild); //возвращет первый узел типа элемент
// console.log(container.lastChild); // возвращает последний узел
// console.log(container.lastElementChild); //возвращает последний узел типа элемент

var element = document.querySelector('.c2');

// console.log(element.previousSibling); // возвращает предыдущий элемент
// console.log(element.previousElementSibling); // возвращает предыдущий узел типа элемент
// console.log(element.nextSibling);// возвращает следующий элемент
// console.log(element.nextElementSibling);// возвращает следующий узел типа элемент

// console.log(element.parentElement);//возвращает родительский узел

// console.log(element.parentElement.parentElement.parentElement);
// var newDiv = document.createElement('div');
// newDiv.textContent = 'привет!';// добавляет элемент последним тэгом родителя
// document.body.appendChild(newDiv);
// newDiv.textContent = 'другой текст';
// document.body.removeChild(newDiv);

// newDiv.textContent = 'и снова здрасте';
// container.insertBefore(newDiv, element);
// console.log(container.children);
// document.body.appendChild(newDiv);
// container.appendChild(newDiv); // определенный элемент может встречаться в документе только один раз
// container.removeChild(newDiv);
// document.body.appendChild(newDiv);
// console.log(container.innerHTML); //возвращает внутреннее содержимое контэйнера
// console.log(container.outerHTML); // возвращает весь контейнер
// console.log(container.tagName); // возвращает тэг контэйнера всегда большими буквами
// container.setAttribute('attr1', 'value1'); //добавляет аттрибут в тэг
// console.log(container.getAttribute('attr1')); // возвращает значение аттрибута
// container.removeAttribute('attr1'); //удаляет аттрибут

function collectDOMStat(root) {

	var obj = {
		tags: {},
		classes: {},
		text : 0
	};

	function fn(where) {
	    let child = where.childNodes;
	    for (let i = 0; i < child.length; i++) {
	    	let tag = child[i].tagName;
	    	var clas = child[i].classList;
	        if (tag === undefined) {
	            obj.text++;
	        } else {
	        	if (tag in obj.tags) {
	        		obj.tags[tag]++;
	        	} else {
	        		obj.tags[tag] = 1;
	        	}
	        	for (let j = 0; j < clas.length; j++){
	        		console.log(clas[j])
		        	if (clas[j] in obj.classes) {
		        		obj.classes[clas[j]]++;
		        	} else {
		        		obj.classes[clas[j]] = 1;
		        	}
		        }
	            if (child[i].childNodes.length) {
	                fn(child[i]);
	            }
	        }
	    }
	}
	fn(root);
	return obj;
};

var object = collectDOMStat(container);
console.log(collectDOMStat(container));

