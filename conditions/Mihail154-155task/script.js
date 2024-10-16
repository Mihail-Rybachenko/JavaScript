"use strict";
console.log('154#1');
let num = [2, 4, 6, 43, 12, 0, 5, 45, 90];
for (let i = 0; i < num.length; i++){
	console.log(num[i]);
	if(num[i] == 0){
		console.log('ноль найден');
		break;
	}
}
console.log('154#2');
let num1 = [2, 4, 6, 3, 1, -3, 9, 5];
let sum = 0;
for (let i = 0; i < num1.length; i++){
	sum += num1[i];
	if(num1[i] < 0){
		break;
	}
}
console.log(sum);
console.log('154#3');
for (let i = 0; i < num1.length; i++){
	if(num1[i] == 3){
		console.log(i+1);
		break;
	}
}
console.log('154#4');
let sum2 = 0;
let counter = 0;
for(let i = 1; i < 100; i++){
sum2+=i;
counter++;
if (sum2 > 100){
console.log(counter);
break;
}
}
console.log(sum2);