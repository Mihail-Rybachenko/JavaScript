"use strict";
console.log('184#1');
console.log(Math.pow(2,10));
console.log('184#2');
console.log(Math.sqrt(245));
console.log('184#3');
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i of arr){
	let cube = Math.pow(i, 3);
	sum+=cube;
}
console.log(sum);
console.log('185#1');

let sqrt = Math.sqrt(245);
console.log(Math.round(sqrt));
console.log(sqrt.toFixed(1));
console.log(sqrt.toFixed(2));
console.log('185#2');
console.log(Math.sqrt(587));
let sqrt1 = Math.sqrt(587);
console.log(Math.floor(sqrt1));
console.log(Math.ceil(sqrt1));
console.log('186#1');
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log('187#1')
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));
console.log('187#2');
let arr4 = [];
for (let i = 1; i <= 10; i++){
	arr4.push(getRandomInt(1, 100))
}
console.log(arr4)
console.log('188#1');
let a = 2;
let b = 6;
console.log(Math.abs(a-b));