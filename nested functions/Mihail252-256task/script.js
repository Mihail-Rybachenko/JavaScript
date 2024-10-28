"use strict";
console.log('252#1');
function func(num1) {
	return function(num2) {
		return function(num3){
			return num1 + num2 + num3;
		}
	}
};

console.log( func(1)(2)(3) );
console.log('252#2');
function func1(num1) {
	return function(num2) {
		return function(num3){
			return function(num4){
				return function(num5){
					return [num1, num2, num3, num4, num5];
				}
			}
		}
	}
}

console.log( func1(2)(3)(4)(5)() );
console.log('253#1')
function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) );
	}
	
	return result;
}
let result = each([1, 2, 3, 4, 5], function(num) {
	return num * 2;
});
console.log(result);
console.log('253#2')
let result1 = each(["hello", "world", "javascript"], function(str) {
	return str.split('').reverse().join('');
});

console.log(result1); 
console.log('253#3')
let result2 = each(["apple", "banana", "cherry"], function(str) {
	return str[0].toUpperCase() + str.slice(1);
});

console.log(result2);
console.log('254#1');
let result3 = each([1, 2, 3, 4, 5], function(num) {
	return num ** 3;
});
console.log(result3); 
console.log('256#1');
let result4 = filter([1, 2, 3, 4, 5], elem => elem > 0);
