"use strict";
console.log('330#1');
let now1 = new Date();
let endOfDay = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate() + 1); 
let hoursRemaining = (endOfDay - now1) / (1000 * 60 * 60); 
console.log(hoursRemaining);
console.log('331#1');
let now = new Date();
let currentYear = now.getFullYear();
let count = 0;

for (let year = 2000; year <= currentYear; year++) {
    let januaryFirst = new Date(year, 0, 1); 
    
    
    if (januaryFirst.getDay() === 0 || januaryFirst.getDay() === 6) {
        count++;
    }
}

console.log(count);
