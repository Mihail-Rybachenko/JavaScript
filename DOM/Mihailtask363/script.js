//1
/*let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.textContent += '!';
}
//2
let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', function () {
		this.textContent = Number(this.textContent) + 1;
	});
}
//3
let button = document.querySelector('button');
let elem = document.querySelector('p');

button.addEventListener('click', function () {
	elem.innerHTML = `<b>${elem.textContent}</b>`;
});
//4
let button = document.querySelector('button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function () {
	let sum = 0;

	for (let elem of elems) {
		sum += Number(elem.textContent);
	}

	console.log(sum);
});
//5
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function () {
		this.textContent += '!';
	});
}
//6
let button = document.querySelector('button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function () {
	for (let elem of elems) {
		elem.innerHTML = `<b>${elem.textContent}</b>`;
	}
});
//7
let button = document.querySelector('button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function () {
	let sum = 0;

	for (let elem of elems) {
		sum += Number(elem.textContent);
	}

	console.log(sum);
});
//8
let button = document.querySelector('button');
let elems = document.querySelectorAll('input');

button.addEventListener('click', function () {
	let sum = 0;

	for (let elem of elems) {
		sum += Number(elem.value);
	}

	console.log(sum);
});
//9
let btn = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function () {
	inp3.value = Number(inp1.value) + Number(inp2.value);
});
//10
let btn = document.querySelector('#btn');
let res = document.querySelector('#res');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');

btn.addEventListener('click', function () {
	res.textContent = Number(inp1.value) + Number(inp2.value);
});
//11
let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');

button.addEventListener('click', function () {
	for (let input of inputs) {
		if (input.value === input.dataset.text) {
			input.classList.add('right');
		} else {
			input.classList.add('wrong');
		}
	}
});
//12
let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');

let texts = ['text1', 'text2', 'text3'];

button.addEventListener('click', function () {
	inputs.forEach((input, index) => {
		if (input.value === texts[index]) {
			input.classList.add('right');
		} else {
			input.classList.add('wrong');
		}
	});
});
//13
let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
	let sum = 0;

	for (let input of inputs) {
		sum += Number(input.value);
	}

	console.log(sum);
});
//14
let btn = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function () {
	inp3.value = Number(inp1.value) + Number(inp2.value);
});
//15
let inp = document.querySelector('#inp');

inp.addEventListener('blur', function () {
	let digits = inp.value.split('');
	let sum = 0;

	for (let digit of digits) {
		sum += Number(digit);
	}

	console.log(sum);
});*/
