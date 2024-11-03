"use strict";
console.log('315#1');
let date = new Date();
let day  = date.getMonth();
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

console.log(months[day]);
console.log('316#1');
let date1 = new Date(2005, 10, 29); // установим 5 ноября 2025 года
let day1  = date1.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day1]);