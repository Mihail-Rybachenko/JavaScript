"use strict";
let day = prompt('Введите число');
if (day >= 1 && day <=10){
	console.log('Первая декада');
}
else if(day >= 11 && day <= 20){
	console.log('Вторая декада');
}
else{
	console.log('Третья декада');
}
if (day < 1 || day > 31){
console.log('error');
}
console.log('128#1');
let num128 = prompt('введите число для num');
let sum128;
if ((num128 >= 0) && (num128 <= 99)) {
    sum128 = Number(String(num128)[0]) + num128 % 10; 
	if (sum128 <= 9) {
		console.log('Сумма цифр однозначна');
	} else  {
		console.log('Сумма цифр двузначна');
	}
	}
console.log(sum128);
