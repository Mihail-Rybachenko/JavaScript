"use strict";
console.log('317#1');
let date = new Date(2025, 0, 1);
console.log(date.getTime());
console.log('318#1');
let now  = new Date();
let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = date2.getTime() - date1.getTime();
let daysPassed = diff / (1000 * 60 * 60 * 24);
console.log(daysPassed);
console.log('318#2');
let birthDate = new Date(2005, 10, 29); 
let now1 = new Date();

let yearsDiff = now.getFullYear() - birthDate.getFullYear();
let monthsDiff = (yearsDiff * 12) + (now1.getMonth() - birthDate.getMonth());

console.log(monthsDiff);
