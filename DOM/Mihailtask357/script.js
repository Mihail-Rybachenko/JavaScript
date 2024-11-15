function func() {
	this.value = Number(this.value) + 1;
}

let inputs = document.querySelectorAll('.input');

for (let input of inputs) {
	input.addEventListener('blur', func);
}
let paragraphs = document.querySelectorAll('.number');

for (let paragraph of paragraphs) {
	paragraph.addEventListener('click', function() {
		let number = Number(this.textContent);
		if (!isNaN(number)) {
			this.textContent = number * number;
		}
	});
}
