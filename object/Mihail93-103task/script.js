"use strict";
let key = 'x';
let obj = {
	[key]: 1,
	y: 2,
	z: 3
};
console.log('93#1');
console.log(obj);
console.log('93#2');
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
let obj1 = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};
console.log(obj1);
console.log('94#1');
let obj2 = {x: 1, y: 2, z: 3};
console.log('x' in obj2);
console.log('w' in obj2);
console.log('95#1');
let obj3 = {x: 1, y: 2, z: 3};
delete obj3.x;
console.log('x' in obj3);
console.log('102#1');
const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];
console.log(res);
console.log('103#1');
let obj4 = {x: 1, y: 2, z: 3};
console.log(obj4.x)
console.log('103#2');
let obj5 = {x: 1, y: 2, z: 3};
let key4 = 'x';
console.log(obj5[key4]);
console.log('103#3');
let obj6 = {x: 1, y: 2, z: 3};
let sum = obj6.x + obj6.y + obj6.x;
console.log(sum);
console.log('103#4');
let obj7 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj7).length);

