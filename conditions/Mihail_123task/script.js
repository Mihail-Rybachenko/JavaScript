"use strict";
console.log('123#1');
let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('123#2');
let test3 = true;
let test4 = true;

if (test3 && !test4) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('123#3');
let test5 = true;
let test6 = true;

if (!test5 && !test6) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('123#4');
let test7 = true;
let test8 = true;

if (test7 && test8) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('123#5');
let test9 = true;
let test10 = true;
let test11 = true;

if (test9 && test10 && test11) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('123#6');
let test12 = true;
let test13 = true;
let test14 = true;

if (test12 || test13 && test14) {
	console.log('+++');
} else {
	console.log('---');
}
console.log('123#7');
let test15 = true;
let test16 = true;
let test17 = true;

if (test15  || test16  && !test17) {
	console.log('+++');
} else {
	console.log('---');
}
