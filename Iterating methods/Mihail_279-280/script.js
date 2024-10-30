"use strict";
console.log('279#1');
let arr = [1, 2, 3, 4, 5];

let res = arr.map(function(elem) {
	return Math.sqrt(elem * 2);
});
console.log('279#2');
let arr1 = ['d', 's', 'c', 'b', 'q'];
console.log(res);
let res1 = arr1.map(function(elem) {
	return elem + '!';
});
console.log(res1);
console.log('279#3');
let arr2 = ["hello", "world", "javascript"];

let reversedArr = arr2.map(function(elem) {
    return elem.split('').reverse().join('');
});

console.log(reversedArr); 
console.log('279#4');
let arr4 = ['123', '456', '789'];

let result = arr4.map(function(elem) {
    return elem.split('').map(Number);
});

console.log(result); 

console.log('279#5');
let arr5 = [10, 20, 30, 40, 50];

let result5 = arr5.map(function(elem, index) {
    return elem * index;
});

console.log(result5);
console.log('280#1');
let arr6 = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

arr.forEach(function(elem) {
    sumOfSquares += elem ** 2;
});

console.log(sumOfSquares); 
