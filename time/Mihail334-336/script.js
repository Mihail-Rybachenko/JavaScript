"use strict";
console.log('334#1');
let date1 = '09-21';
let date2 = '09-23';
if(date1 > date2){
    console.log('первая дата больше');
}
else{
    console.log("Вторая дата больше");
}
console.log('335#1');
let date = '08-20'; 

if (date >= '03-21' && date <= '04-19') {
    console.log('Овен');
} else if (date >= '04-20' && date <= '05-20') {
    console.log('Телец');
} else if (date >= '05-21' && date <= '06-20') {
    console.log('Близнецы');
} else if (date >= '06-21' && date <= '07-22') {
    console.log('Рак');
} else if (date >= '07-23' && date <= '08-22') {
    console.log('Лев');
} else if (date >= '08-23' && date <= '09-22') {
    console.log('Дева');
} else if (date >= '09-23' && date <= '10-22') {
    console.log('Весы');
} else if (date >= '10-23' && date <= '11-21') {
    console.log('Скорпион');
} else if (date >= '11-22' && date <= '12-21') {
    console.log('Стрелец');
} else if (date >= '12-22' && date <= '01-19') {
    console.log('Козерог');
} else if (date >= '01-20' && date <= '02-18') {
    console.log('Водолей');
} else if (date >= '02-19' && date <= '03-20') {
    console.log('Рыбы');
}
console.log('336#1');
let now = new Date(); 
let noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12); 

if (now > noon) {
    console.log("Полдень уже прошел.");
} else {
    console.log("Полдень еще не наступил.");
}
console.log('336#2');
let now1 = new Date(); 
let midMonth = new Date(now1.getFullYear(), now1.getMonth(), 15); 

if (now1 > midMonth) {
    console.log("Половина месяца уже прошла.");
} else {
    console.log("Половина месяца еще не наступила.");
}

