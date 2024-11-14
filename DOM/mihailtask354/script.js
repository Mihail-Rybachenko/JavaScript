let elem = document.querySelector('#elem');

elem.addEventListener('focus', function() {
	this.value = '1';
});

elem.addEventListener('blur', function() {
	this.value = '2';
});
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
	this.textContent = Number(this.textContent) + 1;
});
