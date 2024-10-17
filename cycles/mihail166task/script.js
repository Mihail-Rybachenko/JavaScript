"use strict";
console.log('166#1');
for (let i = 0; i <= 10; i++) {
	console.log(i);
}
console.log('166#2');
for (let i = 10; i >= 0; i--) {
	console.log(i);
}
console.log('166#3');
for (let i = 10; i >= 0; i--) {
	console.log(i);
}
console.log('166#4');
let i = 0;
while (i <= 10) {
	console.log(i);
	i++;
}
console.log('166#5');
let res = 0;
for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res);
console.log('166#6');
let res1 = 1;

for (let i = 1; i <= 10; i++) {
	res1 *= i;
}

console.log(res1);
console.log('166#7');
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += Number(elem);
}

console.log(sum); // должно вывести 15
console.log('166#8');
let arr1 = ['1', '2', '3', '4', '5'];
let sum1 = 0;

for (let elem of arr1) {
	sum1 += +elem;
}

console.log(sum1); // должно вывести 15

console.log('166#9');
let arr2 = ['1', '2', '3', '4', '5'];
let sum2 = 0;

for (let elem of arr2) {
	sum2 += +elem;
}

console.log(sum2); // должно вывести 15
console.log('166#10');
let arr3 = ['1', '2', '3', '4', '5'];
let sum3 = 0;

for (let i = 0; i < arr3.length; i++) {
	sum3 += +arr3[i];
}

console.log(sum3); // почему-то выводит NaN

console.log('166#11');
let arr4 = ['1', '2', '3', '4', '5'];
let sum4 = 0;

for (let i = 0; i < arr4.length; i++) {
	sum4 += +arr4[i];
}

console.log(sum4); // почему-то выводит не 15

console.log('166#12');
let arr5 = ['1', '2', '3', '4', '5'];
let sum5 = 0;

for (let i = 0; i < arr5.length; i++) {
	sum5 += +arr5[i];
}

console.log(sum5); // почему-то выводит не 15

console.log('166#13');
let arr6 = [1, 2, 3, 4, 5];
for (let elem in arr6) {
	arr6[elem] = arr6[elem] ** 2;
}

console.log(arr6);

console.log('166#14');
let arr7 = [];

for (let i = 1; i <= 5; i++) {
	arr7.push(i);
}

console.log(arr7);

console.log('166#15');
let obj = {a: 1, b: 2, c: 3};
let sum7 = 0;

for (let elem in obj) {
	sum7 += obj[elem];
}
console.log(sum7);
console.log('166#16');
let obj1 = {a: 1, b: 2, c: 3};
let sum8 = 0;

for (let key in obj1) {
	sum8 += obj1[key];
}

console.log(sum8);
console.log('166#17');
let arr9 = [1, 2, 3, 4, 5];
let res2 = '';

for (let elem of arr9) {
	if (elem === 3) {
		res2 = '+++';
        break;
	} else {
		res2 = '---';
	}
}

console.log(res2);
console.log('166#18');
let arr10 = [];
for (let i = 1; i <= 5; i++) {
	arr10.push(i);
}

console.log(arr10);
console.log('166#19');
let arr11 = [1, 2, 3, 4, 5];
let res3 = false;

for (let elem of arr11) {
	if (elem === 3) {
		res3 = true;
		break;
	}
}

console.log(res3);
console.log('166#20');
let arr12 = [1, 2, 3, 4, 5];

for (let elem of arr12) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}
console.log('166#21');
let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res4 =[];
for (let elem of arr13) {
	if (elem % 2 != 0) {
		res4.push(elem);
	}
}

console.log(res4);