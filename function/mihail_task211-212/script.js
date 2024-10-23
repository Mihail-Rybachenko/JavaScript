"use strict";
console.log('211#1');
function fun(arr){
	for(let i of arr){
		if(i % 2 != 0){
			return false;
		}
	}
	return true;
	
}
console.log(fun([4, 3, 6, 1]));
console.log('211#2');
function fun1(num){
let numstring = String(num);
let arr = numstring.split('');
	for(let i of arr){
		if(i % 2 == 0){
			return false;
		}
	}
	return true;
	
}

console.log(fun1(11551));
console.log('211#3');
function fun2(arr){
	for(let i = 0; i < arr.length - 1; i++){
		if(arr[i] == arr[i+1]){
			return false;
		}
	}
	return true;
	
}
console.log(fun2([4, 5, 6, 5, 1]));

console.log('212#1');
function func4(a, b) {
	return a == b;
}
console.log(func4(5, 5));
console.log('212#2');
function func5(a, b) {
	return a != b;
}
console.log(func5(5, 5));
console.log('212#3');
function func6(a, b) {
	return a + b >= 10;
}
console.log(func6(5, 4));
console.log('212#4');
function func7(num) {
	return num >= 0;
}
console.log(func7(5));