"use strict";
console.log('206#1');
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
let res = round(sqrt(2));
console.log(res);
console.log('206#2-3');
function sqrt1(num) {
	return Math.sqrt(num);
}

function sum1(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res1 = round(sum1(sqrt1(2), sqrt1(3), sqrt1(4)));
console.log(res1);
console.log('207#1');
function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) ); //3 выведится что ниже return он просто не увидит
console.log('207#2');
function func1(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func1(10) ); //100 так как больше 0
console.log( func1(-5) ); // -5 < 0 поэтому возьмет число по модулю
console.log('207#3');
function func3(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func3(10) ); //100
console.log( func3(-5) ); //5