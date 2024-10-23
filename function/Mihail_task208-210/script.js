"use strict";
console.log('208#1');
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		
	}
	return sum; // так правильно, в прошлый раз return был в цикле поэтому и остановился с одноц итерации
}

console.log( func(5) );  
console.log('209#1');
function fun(num){
	let i = 0;
	while(num >= 10){
		num /= 2;
		i++;
	}
	return i;
}
console.log(fun(100));
console.log('210#1');
function func1(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}

console.log(func1(3, 4));

