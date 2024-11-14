
let paragraphs = document.querySelectorAll('.text');

paragraphs.forEach(function(paragraph) {
	paragraph.addEventListener('click', function() {
		this.textContent += '!';
	});
});
let inputs = document.querySelectorAll('.number');

inputs.forEach(function(input) {
	input.addEventListener('blur', function() {
		let number = Number(this.value);
		if (!isNaN(number)) {
			this.value = number * number;
		}
	});
});
