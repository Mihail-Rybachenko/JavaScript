let listItems = document.querySelectorAll('li');

for (let item of listItems) {
	item.addEventListener('click', function() {
		this.textContent = Number(this.textContent) + 1;
	});
}

let listItems2 = document.querySelectorAll('li');

for (let item of listItems2) {
	item.addEventListener('click', function func() {
		this.textContent = Number(this.textContent) + 1;
		this.removeEventListener('click', func); 
	});
}
let listItems1 = document.querySelectorAll('li');

for (let item of listItems1) {
	item.addEventListener('click', function func() {
		let currentValue = Number(this.textContent);
		if (currentValue < 10) {
			this.textContent = currentValue + 1;
			if (currentValue + 1 >= 10) {
				this.removeEventListener('click', func); 
			}
		}
	});
}
