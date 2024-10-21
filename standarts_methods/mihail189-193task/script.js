"use strict";
console.log('189#1');
let str = 'js';
console.log(str.toUpperCase());
console.log('189#2');
let str1 = 'JS';
console.log(str1.toLowerCase());
console.log('190#1');
let str2 = 'я учу javascript';
let sub = str2.substr(2, 3);
let sub2 = str2.substr(6);
let sub3 = str2.substring(2, 5);
let sub4 = str2.substring(6);
let sub5 = str2.slice(2, 5);
let sub6 = str2.slice(6);
console.log(sub);
console.log(sub2);
console.log(sub3);
console.log(sub4);
console.log(sub5);
console.log(sub6);
let res = 'ab cd ef'.includes('cd', 4);
console.log(res);
console.log('191#1');
let str4 = 'https://www.youtube.com';
let str4check = str4.startsWith('http://');
console.log(str4check);
console.log('191#2');
let str5 = 'main.html'
let str5check = str5.endsWith('.html');
console.log(str5check);
console.log('192#1');
let str6 = '1-2-3-4-5';
let elem = '-';
while (str6.includes(elem)) {
	str6 = str6.replace(elem, '.');
}

console.log(str6);
console.log('193#1');
let str7 = '1-2-3-4-5';
let str7true = str7.split('-')
console.log(str7true);
console.log('193#2');
let str8 = '12345';
let str8true = str8.split('')
console.log(str8true);
console.log('193#3');
let arr = [1, 2, 3, 4, 5];
let arrtrue = arr.join('-');
console.log(arrtrue);