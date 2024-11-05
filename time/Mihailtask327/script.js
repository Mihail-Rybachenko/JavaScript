"use strict";
console.log('327#1');
let now = new Date();
let startOfYear = new Date(2024, 0, 1); 
let september10 = new Date(2024, 8, 10); 

let differenceInDays = (september10 - startOfYear) / (1000 * 60 * 60 * 24);
console.log(differenceInDays); 

console.log('327#2');
let currentDate = new Date();
let day20ThisMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 20);
let day10NextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 10);

let differenceInDaysBetweenDates = (day10NextMonth - day20ThisMonth) / (1000 * 60 * 60 * 24);
console.log(differenceInDaysBetweenDates); 
