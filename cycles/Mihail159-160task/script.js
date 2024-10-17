"use strict";
console.log('159#1');
let arr = [];
for (let i = 1; i <= 10; i++){
	arr.push(i);
}
console.log(arr);
console.log('159#2');
let arr1 = [];
for (let i = 1; i <= 10; i++){
	arr1.push('x');
}
console.log(arr1);
console.log('159#3');
let num = [3, 2, 54, 6, 7, 8, -3, -4 ,-99, 5];
let pozitive = [];
for (let i = 0; i < num.length; i++){
	if (num[i] > 0){
pozitive.push(num[i]);
	}
}
console.log(pozitive);
console.log('160#1');
let num2 = [4, 3, 36, 15, 26];
for (let i = 0; i < num2.length; i++){
	num2[i] = num2[i] * num2[i];
}
console.log(num2);

console.log('160#2');
let num3 = [4, 3, 36, 15, 26];
for (let i = 0; i < num3.length; i++){
	num3[i]--;
}
console.log(num3);
console.log('160#3');
let num4 = [4, 3, 36, 15, 26];
for (let i = 0; i < num4.length; i++){
	num4[i]+= 10;
}
console.log(num4);