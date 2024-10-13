"use strict";
console.log('131#1');
let num = 1;
let res = num >= 0 ? 1: 2;
console.log(res);
console.log('132#1');
let a = 2 * (3 - 1);
let b = 6 - 2;
let c = a == b;
console.log(c);
console.log('132#2');
let a1 = 5 * (7 - 4);
let b1= 1 + 2 + 7;
let c1 = a1 > b1;
console.log(c1);
console.log('132#3');
let a2 = 2 ** 4;
let b2 = 4 ** 2;
let c2 = a2 != b2;
console.log(c2);
let age = confirm('Вам есть 18 лет?');
if(age){
	alert("Вам доступен материал для взрослых");
}
else{
	alert('Доступ запрещен!!!!');
}
console.log('134#1');
let age1 = 17;
let adult;
if (age1 >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);
console.log('135#1');
let age2 = 17;
let adult2;

if (age2 >= 18) {
	adult2= true;
} else {
	adult2 = false;
}
console.log(adult2);
console.log('135#2');
let age3 = 17;
let adult3;

if (age3 >= 18) {
	adult3 = true;
} else {
	adult3 = false;
}
console.log(adult3);
console.log('135#3');
let age4 = 17;
let res4;

if (age4 >= 18) {
	if (age4 <= 23) {
		 res4 = 'от 18 до 23';
	} else {
		 res4 = 'больше 23';
	}
} else {
	    res4 = 'меньше 18';
}

console.log(res4);
console.log('135#4');
let age5 = 19;
let res5;

if (age5 >= 18) {
	if (age5 <= 23) {
		res5 = 'от 18 до 23';
	} else {
		res5 = 'больше 23';
	}
} else {
	res5 = 'меньше 18';
}
console.log(res5);
console.log('136#1');
let min = 10;

if (min >= 0 && min <= 20) {
	console.log('1 четверть');
}

if (min >= 21 && min <= 40) {
	console.log('2 четверть');
}

if (min >= 41 && min <= 60) {
	console.log('3 четверть');
}
console.log('137#1');
let arr = [2, 3, 5];
if(arr.length == 3){
	let sum = arr[0] + arr[1] + arr[2];
	console.log(sum);
}
else{
	console.log('В массиве не 3 элемента');
}
console.log('138#1');
let task138 = 'akdfjdsk'
	if(task138[0] == 'a'){
		console.log('Элемент начинается на a');
	}
	else{
		console.log('Элемент не начинается на а');
	}
	console.log('138#2');
let task138_2 = 'saddsccvcv';
if (task138_2[task138_2.length - 1] == 'x'){
	console.log('Элемент заканчивается на x');
}
else{
	console.log('Элемент не заканчивается на x');
}
console.log('138#3');
let task138_3 = 'asdsadvcvcv';
if(task138_3[0] == 'a' || task138_3[0] == 'b'){
	console.log('эта строка начинается на символ a или b');
}
else{
	console.log('не начинатся');
}
console.log('139#1');
let num6 = 765;

if (String(num6)[2] == 5) {
	console.log('верно'); // выведет 'верно'
} else {
	console.log('неверно');
}
console.log('139#2-140#1');
let num7 = 866;
if (num7 % 2 == 0)
{
	console.log('Число четное');
}
    else{
	console.log('Число нечетное');
}
console.log('140#2');
let num8 = 27;
if(num8 % 3 == 0)
{
	console.log('Число делится на 3 без остатка');
}
else{
	console.log('Число не делится на 3 без остатка');
}
console.log('141#1');
let num11 = 1;
let num12 = 2;

if (num11 + num12 === 3) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('141#2-3');
let num13 = '1';
let num14 = '2';

if (Number(num13) + Number(num14) === 3) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('141#4-6');
let num15 = 123;

if (Number(String(num15)[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('141#7');
let num16 = 123;
let first = Number(String(num16)[0]);

if (first === 1) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('141#8-9');
let num17 = 12;
let strr = String(num17);
if (strr.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('141#10-12');
let num18 = 12;
if (String(num18).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('141#13');
let num19 = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = Number(num19[0]) + Number(num19[1]) + Number(num19[2]);
let sum2 = Number(num19[3]) + Number(num19[4]) + Number(num19[5]);

if (sum1 === sum2) {
  console.log('суммы равны');
} else {
  console.log('суммы не равны');
}


