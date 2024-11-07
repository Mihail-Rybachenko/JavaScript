"use strict";
function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}
let elem = document.querySelector('#elem');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);
let button = document.querySelector('#button');
function func4() {
	console.log('двойной клик');
}
function func5() {
	console.log('Ты навелся');
}
function func6() {
	console.log('ты ушел');
}
button.addEventListener('dblclick', func4);
button.addEventListener('mouseover', func5);
button.addEventListener('mouseout', func6);