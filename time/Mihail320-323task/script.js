"use strict";
console.log('321#1')
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0); 
    return date.getDate();
}


console.log(getLastDayOfMonth(2024, 11)); 
console.log('321#2')
let lastDayOfMay2025 = new Date(2025, 5, 0); 
console.log(lastDayOfMay2025.getDay()); 
console.log('322#1')
function isLeap(year) {
    let date = new Date(year, 2, 0); 
    return date.getDate() === 29; 
}

console.log(isLeap(2020)); 

console.log('323#1')
function checkDate(year, month, day) {
    let date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}


console.log(checkDate(2025, 0, 31)); 
console.log(checkDate(2025, 0, 32)); 

