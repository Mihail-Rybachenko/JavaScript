"use strict";
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
function func() {
	console.log(elem.textContent);
	elem.textContent = '!!!';
}
button.addEventListener('click', func);
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function(){
	console.log(Number(elem1.textContent) + Number(elem2.textContent));
});
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
let div = document.querySelector('#div');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function(){
	div.textContent = (Number(elem3.textContent) + Number(elem4.textContent) + Number(elem5.textContent));
	console.log(div.textContent);
});
let elem6 = document.querySelector('#elem6');
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function(){
	let currentValue = Number(elem6.textContent);
  currentValue += 1;
  elem6.textContent = currentValue;
});
let elem7 = document.querySelector('#elem7');
let button4 = document.querySelector('#button4');
button4.addEventListener('click', function(){
	elem7.textContent += '!';
});
