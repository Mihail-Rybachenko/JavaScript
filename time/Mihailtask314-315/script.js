"use strict";
console.log('313#1');
let date = new Date();
console.log(date.getDay());

// Проверяем день недели, если 0 (воскресенье) или 6 (суббота)
if (date.getDay() == 6 || date.getDay() == 0) {
    console.log('Это выходной день');
} else {
    console.log('Будний день');
}
let date1 = new Date();
let today = date1.getDay();
let daysUntilSunday = (7 - today) % 7;

console.log(`До ближайшего воскресенья осталось ${daysUntilSunday} дней.`);
