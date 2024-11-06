"use strict";
console.log('332#1');
let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let secondsSinceStartOfDay = Math.floor((now - startOfDay) / 1000);
console.log( secondsSinceStartOfDay);
console.log('332#2');
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let secondsUntilEndOfDay = Math.floor((endOfDay - now) / 1000);
console.log( secondsUntilEndOfDay);
console.log('332#3');
let newYear = new Date(now.getFullYear() + 1, 0, 1);
let daysUntilNewYear = Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));
console.log(daysUntilNewYear);
console.log('332#4');
let year = now.getFullYear();
let fridayThe13thCount = 0;
for (let month = 0; month < 12; month++) {
    let thirteenth = new Date(year, month, 13);
    if (thirteenth.getDay() === 5) {
        fridayThe13thCount++;
    }
}
console.log(fridayThe13thCount);

console.log('332#5');
let threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
let yearThreeMonthsAgo = threeMonthsAgo.getFullYear();
console.log(yearThreeMonthsAgo);

console.log('332#6');
let lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
let lastDayOfMonthWeekday = lastDayOfMonth.getDay();
console.log(lastDayOfMonthWeekday);

console.log('332#7');
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear);

console.log('332#8');
let previousLeapYear = year - 1;
while (!((previousLeapYear % 4 === 0 && previousLeapYear % 100 !== 0) || (previousLeapYear % 400 === 0))) {
    previousLeapYear--;
}
console.log(previousLeapYear);
console.log('332#9');
let nextLeapYear = year + 1;
while (!((nextLeapYear % 4 === 0 && nextLeapYear % 100 !== 0) || (nextLeapYear % 400 === 0))) {
    nextLeapYear++;
}
console.log(nextLeapYear);
console.log('333#1');
let date1 = '2020-11-31';
let date2 = '2020-12-01';
if(date1 > date2){
    console.log('первая дата больше');
}
else{
    console.log("Вторая дата больше");
}