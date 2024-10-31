"use strict";
console.log('286#1');
let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));
console.log('288#1');
let arr1 = [1, 2, 3, 4, 5];
let res = Math.min(...arr1);
console.log(res);