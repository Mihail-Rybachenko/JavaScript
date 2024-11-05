"use strict";
console.log('326#1');
let now = new Date();
let nextYear = now.getFullYear() + 1;
let lastDayNextYear = new Date(nextYear, 11, 31); 
let dayOfWeek = lastDayNextYear.getDay();

console.log(dayOfWeek); 

console.log('326#2');
let today = new Date();
let sameDayNextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
let dayOfWeekNextYear = sameDayNextYear.getDay();

console.log(dayOfWeekNextYear); 

console.log('326#3');
let sameDayLastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
let dayOfWeekLastYear = sameDayLastYear.getDay();

console.log(dayOfWeekLastYear); 
