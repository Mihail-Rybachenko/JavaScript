"use strict";
console.log('296#1');
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr;
console.log(position);
console.log('297#1');
function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}

let [name1, surname1, department1, position1, salary1] = func();
console.log(salary1);
console.log('298#1');
let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];

let [,, department2, position2 ,] = arr2;
console.log(position2);
console.log('300#1');
let arr3 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name2, surname2, ...rest] = arr3;
console.log(rest);