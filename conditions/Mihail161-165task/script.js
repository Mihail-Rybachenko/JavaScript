"use strict";
console.log('161#1');
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i < arr1.length; i++){
	obj[arr1[i]] = arr2[i];
}
console.log(obj);
console.log('161#2');
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let objTrue = {};
for (let i in obj1){
if (obj1[i] % 2 == 0){
	objTrue[i] = obj1[i];
}
}
console.log(objTrue);
console.log('161#3');
let obj3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};

for (let i in obj3) {
    newObj[obj3[i]] = i;
}

console.log(newObj);
console.log('162#2');
let obj4 = {x: 1, y: 2, z: 3};
for (let i in obj4){
	obj4[i]++;
}
console.log(obj4);

console.log('163#1');
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let i of arr){
if(i == 'c'){
	flag = true;
	break;
}
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('163#2');
let num = 29; 
let isPrime = true; 

if (num <= 1) {
    isPrime = false; 
} else {
    for (let i = 2; i < num; i++) { 
        if (num % i == 0) {
            isPrime = false; 
            break; 
        }
    }
}
if (isPrime) {
    console.log(`${num} является простым числом.`);
} else {
    console.log(`${num} не является простым числом.`);
}
console.log('164#1');


let arr5 = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let i of arr5) {
    let firstDigit = String(i)[0]; // Получаем первую цифру как строку
    if (firstDigit === '1' || firstDigit === '2') {
        sum += i; // Добавляем к сумме
    }
}

console.log(`Сумма элементов с первой цифрой 1 или 2: ${sum}`);
console.log('165#1');
let obj6 = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum1 = 0;

for (let elem in obj6) {
    let value = obj6[elem];
    if (String(value)[0] === '1' || String(value)[0] === '2') {
        sum1 += value; 
    }
}

console.log(sum1); 