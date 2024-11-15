let link = document.querySelector('#link');
let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function addHref() {
	link.textContent += ` (${link.getAttribute('href')})`;
	this.removeEventListener('click', addHref);
});
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function increaseValue() {
	let currentValue = Number(this.textContent);
	this.textContent = currentValue + 1;

	if (currentValue + 1 >= 10) {
		this.removeEventListener('click', increaseValue);
	}
});
