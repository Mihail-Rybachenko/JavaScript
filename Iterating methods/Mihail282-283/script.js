"use strict";
console.log('282#1');
let arr = [2, 3, 4, 9, -1];
let res = arr.every(function(elem){
    if (elem > 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(res)
console.log('282#2');
let res1 = arr.every(function(elem, index){
    if (elem * index < 30){
        return true;
    }
    else{
        return false;
    }
})
console.log(res1)
console.log('283#1');
let arr2 = [1, -3, -9, -2];

let result = arr2.some(function(elem) {
	return elem > 0;
});

console.log(result);
console.log('283#2');
let arr3 = [1, 31, 32, 33];

let result1 = arr3.some(function(elem, index) {
	return elem * index > 30;
});

console.log(result1);