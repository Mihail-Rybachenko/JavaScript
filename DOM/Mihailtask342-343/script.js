"use strict";
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
}
button1.addEventListener('click', func1);
button2.addEventListener('click', func2);

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
function func() {
	console.log('message');
}
elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);
