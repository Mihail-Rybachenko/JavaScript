let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function() {
	let paragraphs = document.querySelectorAll('.paragraph');
	
	for (let paragraph of paragraphs) {
		paragraph.textContent = 'text';
	}
});
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function() {
	let paragraphs = document.querySelectorAll('.paragraph');
	
	paragraphs.forEach((paragraph, index) => {
		paragraph.textContent += ` ${index + 1}`;
	});
});
let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function() {
	let inputs = document.querySelectorAll('.number');
	let sum = 0;

	for (let input of inputs) {
		let number = Number(input.value);
		if (!isNaN(number)) {
			sum += number;
		}
	}

	let result = document.querySelector('#result');
	result.textContent = `Сумма: ${sum}`;
});
