function div(a, b) {
	if (b === 0) {
		throw new Error('нельзя делить на 0');
	}	
	if (b === undefined) {
		throw new Error('необходимо ввести b');
	}
	return a / b;
}

try{
	console.log(div(14)); 
} catch (e){
	console.error(e.message);
}

//рекомендуется обрабатывать исключения вне функции