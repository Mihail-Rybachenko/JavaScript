"use strict";
console.log('194#1');
let arr = [1, 2, 3];
let arrFirst = arr.shift();
console.log(arrFirst);
console.log('194#2');
let arrEnd = arr.pop();
console.log(arrEnd);
console.log('194#3');
let arr1 = [1, 2, 3];
arr1.push(4,5,6);
console.log(arr1);
console.log('194#4');
arr1.unshift(4, 5, 6);
console.log(arr1);
console.log('195#1');
let arr2 = [1, 2, 3, 4, 5];
let sl = arr2.slice(0, 3);
console.log(sl);
console.log('195#2');
let arr3 = [1, 2, 3, 4, 5];
let sl1 = arr3.slice(3, 5);
console.log(sl1);
console.log('196#1');
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 2);
console.log(arr5);
console.log('196#2');
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(3, 0, 'a', 'b', 'c');
console.log(arr6);
console.log('196#3');
let arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 0, 'a', 'b');
arr7.splice(6, 0, 'c');
arr7.splice(9, 0, 'e');

console.log(arr7);
console.log('197#1');
let arr8 = [1, 2, 3, 4, 5];
let elem = arr8.includes(3);
console.log(elem);