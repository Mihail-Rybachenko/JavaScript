"use strict";
console.log('167#1');
for (let i = 1; i <= 100; i++){
    console.log(i);
}
console.log('167#2');
for (let i = 100; i >= 1; i--){
    console.log(i);
}
console.log('167#3');
for (let i = 1; i <= 100; i++){
    if(i % 2 == 0)
    console.log(i);
}
console.log('167#4');
let arr = [];
for(let i = 0; i <=10; i++){
    arr.push('x');
}
console.log(arr);
console.log('167#5');
let arr1 = [];
for(let i = 1; i <=10; i++){
arr1.push(i);
}
console.log(arr1);
console.log('167#6');
let arr_num = [3, 2, 11, 56, 88, 2, 1];
let arr_numtrue = [];
for (let i of arr_num){
    if (i > 0 && i < 10){
arr_numtrue.push(i);
    }
}
console.log(arr_numtrue);
console.log('167#7');
let num = [3, 4, 5, 2, 6, 10];
let flag = false;
for (let i of num){
    if(i == 5){
flag = true;
console.log('есть 5');
break;
}
   }

if(flag == false)
console.log('нету');
console.log('167#8');
let sum = 0;
for (let i of num){
    sum += i;
}
console.log(sum);
console.log('167#9');
let sum1 = 0;
for (let i of num){
    sum1 += i * i;
}
console.log(sum1);
console.log('167#10');
let sr = 0;
let srar = num.length;
for (let i of num){
    sr += i;
}
console.log(sr / srar);
console.log('167#11');
let factorial = 5;
let sum2  = 1;
for (let i = 1; i <= factorial; i++){
sum2 *= i
}
console.log(sum2);
console.log('167#12');
let arr4 = [];
for (let i = 10; i>=1;i--){
    arr4.push(i);
}
console.log(arr4);
console.log('167#13');
let num3 = [3, 4, 1, 2, 6, -2, -9, 1];
let sum4 = 0;
for(let i of num3){
    if(i > 0){
        sum4+=i;
    }
}
console.log('167#14');
console.log(sum4);
let arr5 = [10, 20, 30, 50, 235, 3000];
let arr6 = [];
for (let i of arr5){
    let str = String(i);
    if(str[0] == '1' || str[0] == '2' || str[0] == '5'){
        arr6.push(i);
    }
}
console.log(arr6);
console.log('167#15');
for (let i = arr5.length - 1; i >= 0; i--){
    console.log(arr5[i]);
}

console.log('167#16');
let num5 = [0, 23, 2, 54, 5];
let poz = 0;
let num55 = [];
for (let i of num5){
    if(i == poz){
num55.push(i);
    }
    poz++;
}
console.log(num55);
console.log('167#17');
for (let i of num5){
    document.write(i);
    document.write('<br>');
}
console.log('167#18');
for (let i of num5){
    document.write(i);
    document.write('<p>');
}
console.log('167#19');
let days = ["пн","вт","ср","чт","пт","суб","вос"];
for (let i of days) {
    if (i == 'суб' || i == 'вос') {
        document.write('<b>' + i + '</b><br>');
    } else {
        document.write(i + '<br>');
    }
}

document.write('<br>');
console.log('167#20');
let dayss = ["пн", "вт", "ср", "чт", "пт", "суб", "вос"];
let day_true = "чт";
for (let i of dayss) {
    if (i == day_true) {
        document.write('<b>' + i + '</b>');
    } else {
        document.write(i);
    }
    document.write('<br>');
}
console.log('167#21');
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let i in obj){
    obj[i] = Math.round(obj[i] * 1.1);
}

console.log(obj);

console.log('167#22');
let obj1 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let i in obj1){
    if(obj1[i] <= 400){
    obj1[i] = Math.round(obj1[i] * 1.1);
    }
    
}
console.log(obj1);
console.log('167#23');
let arr10 = [1, 2, 3, 4, 5];
let arr11 = [6, 7, 8, 9, 10];

let obj3 = {};

for (let i = 0; i < arr10.length; i++) {
    obj3[arr10[i]] = arr11[i];
}

console.log(obj3);
console.log('167#24');
let obj12 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

let sumKeys = 0;
let sumValues = 0;

for (let key in obj12) {
    sumKeys += Number(key);  
    sumValues += obj12[key];  
}

let result = sumKeys / sumValues;


console.log("Результат деления:", result);
console.log('167#25');
let obj13 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let keysArray = Object.keys(obj13);     
let valuesArray = Object.values(obj13); 

console.log("Ключи:", keysArray);
console.log("Значения:", valuesArray);
console.log('167#26');
let obj14 = { 
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let resultArray = [];

for (let key in obj14) {
    let value = String(obj14[key]);  
    if (value[0] === '1' || value[0] === '2') {  
        resultArray.push(obj14[key]);  
    }
}

console.log(resultArray);

console.log('167#27');
let arr20 = ['a', 'b', 'c', 'd', 'e'];
let obj23 = {};

for (let i = 0; i < arr20.length; i++) {
    obj23[i + 1] = arr20[i];  
}

console.log(obj23);

console.log('167#28');
let arr31 = ['a', 'b', 'c', 'd', 'e'];
let obj31 = {};

for (let i = 0; i < arr31.length; i++) {
    obj[arr31[i]] = i + 1;  
}

console.log(obj31);
