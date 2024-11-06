"use strict";
console.log('328#1');
let now1 = new Date();
let yesterdayNoon = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate() - 1, 12); 
let hoursSinceYesterdayNoon = (now1 - yesterdayNoon) / (1000 * 60 * 60); 
console.log(hoursSinceYesterdayNoon);

console.log('329#1');
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
console.log((date2 - date) / (1000 * 60 * 60)); 

