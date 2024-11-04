"use strict";
console.log('324#1');
let now  = new Date(); 
let date = new Date(now.getFullYear(), 11, 31); 
console.log(date.getDay());
console.log('325#1')
console.log('Нет, проблем не будет. Если текущий месяц — январь (месяц с номером 0), и мы отнимаем 1, JavaScript автоматически корректирует дату и возвращает декабрь предыдущего года. Например, если текущая дата — 1 января 2024 года, то при создании даты с new Date(2024, -1, 1) JavaScript корректирует её до 1 декабря 2023 года.')
console.log('325#2')
let now1 = new Date();
let previousMonthDate = new Date(now1.getFullYear(), now1.getMonth() - 1, now1.getDate());
let dayOfWeek = previousMonthDate.getDay();

console.log(dayOfWeek);
