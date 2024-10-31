"use strict";
console.log('301#1');
let arr = ['John', 'Smit', 'development', 'programmer'];

let [name, surname, department, position = 'trainee'] = arr;
console.log(position);
console.log('302#1');
function Month() {
	return (new Date).getMonth() + 1;
}
function Year() {
	return (new Date).getFullYear();
}
let arr1 = [, , 2005];
let [year=Year(), month=Month(), day] = arr1;
console.log(month);
console.log('304#1');
let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color, width, height} = options
console.log(width);