"use strict";
console.log('144#1')
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr){
    console.log(elem);
}
console.log('145#1')
let obj = {x: 1, y: 2, z: 3};
for (let elem0 in obj){
    console.log(elem0);
}
console.log('145#2')
let obj1 = {x: 1, y: 2, z: 3};
for (let elem1 in obj1){
    console.log(obj[elem1]);
}