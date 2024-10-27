"use strict";
console.log('244#1-2');
function test(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	return arr;
}
let result = test([1, 2, 3], function(num) {
	return num * num * num;
});

console.log(result); 
console.log('245#1');
function func10(num1, num2){
	function square(num){
		return num * num;
	}
	function cube(num){
		return num * num * num;
	}
	return square(num1) + cube(num2)
}
console.log(func10(4, 5));