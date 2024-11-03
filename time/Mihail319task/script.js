"use strict";
console.log('319#1');
let start1 = new Date(2000, 8, 1);  // Сентябрь - 8, так как месяцы считаются с 0
let end1 = new Date(2010, 1, 15);   // Февраль - 1

let diff1 = end1 - start1;
console.log(diff1);

console.log('319#2');
let start2 = new Date(2000, 8, 1);
let end2 = new Date(2010, 1, 15);

let diff2 = (end2 - start2) / (1000 * 60 * 60 * 24);
console.log(Math.floor(diff2));

console.log('319#3');
let start3 = new Date(2000, 8, 1);
let end3 = new Date(2010, 1, 15);

let yearsDiff3 = end3.getFullYear() - start3.getFullYear();
let monthsDiff3 = (yearsDiff3 * 12) + (end3.getMonth() - start3.getMonth());

console.log(monthsDiff3);

console.log('319#4');
let start4 = new Date(2000, 8, 1);
let end4 = new Date(2010, 1, 15);

let yearsDiff4 = end4.getFullYear() - start4.getFullYear();

if (end4.getMonth() < start4.getMonth() || 
    (end4.getMonth() === start4.getMonth() && end4.getDate() < start4.getDate())) {
    yearsDiff4--;
}

console.log(yearsDiff4);
