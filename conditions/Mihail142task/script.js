"use strict";
let month = 5;
if ( month == 12 || month == 1 || month == 2){
	console.log('Зима');
}
else if( month <= 5 && month >= 3){
	console.log('Весна');
}
else if( month <= 8 && month >= 6){
	console.log('Лето');
}
else{
	console.log('Осень');
}

let str = 'abcde';
if (str[0] == 'a'){
	console.log('да');
}
else{
	console.log('нет');
}
let num = 12345;
if(num[0] == 1 || 2 || 3){
	console.log('да');
}
else{
	console.log('нет');
}
let th = 234;
let th1, th2, th3;


th = String(th);

th1 = Number(th[0]); 
th2 = Number(th[1]); 
th3 = Number(th[2]); 

let sum = th1 + th2 + th3; 
console.log('Сумма цифр числа:', sum);
let num2 = '133421'; 
if (num2.length === 6) {
  let sum1 = Number(num2[0]) + Number(num2[1]) + Number(num2[2]); 
  let sum2 = Number(num2[3]) + Number(num2[4]) + Number(num2[5]); 

  if (sum1 === sum2) {
    console.log('да'); 
  } else {
    console.log('нет'); 
  }
}