"use strict";
console.log('198#1');
let obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj));
console.log('199#1');
let num = 12345;
let arr1 = String(num);
let arr = arr1.split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);
console.log('199#2');
let num2 = 12345;
let arr2 = String(num2).split('');

let sum2 = 0;
for (let digit of arr2) {
	sum2 += Number(digit);
}

console.log(sum2);
console.log('199#3');
let num3 = 12345;
let arr3 = String(num3).split('');

let sum3= 0;
for (let digit of arr3) {
	sum3 += Number(digit);
}

console.log(sum3); // почему-то выводит 5, а не 15
console.log('199#4');
let num4 = 12345;
let arr4 = String(num4).split('');

let sum4 = 0;
for (let digit of arr4) {
	sum4 += Number(digit);
}

console.log(sum4);
console.log('199#5');
let num5 = 12345;
let arr5 = String(num5).split('');

let prod = 1;
for (let digit of arr5) {
	prod *= digit;
}

console.log(prod);