"use strict";
console.log('148#1');
let arr = ['a', 'b', 'c', 'd', 'e'];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log('148#2');
for(let i = 1; i < arr.length - 1; i++){
    console.log(arr[i]);
}
console.log('148#3');
for(let i = arr.length - 1; i >=0; i--){
    console.log(arr[i]);
}
console.log('148#4');
let arr1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr1.length; i++) {
	console.log(arr1[i]);
}
console.log('149#1');
let arr3 = [2, 5, 9, 15, 1, 4];
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] > 3 && arr3[i] < 10){
        console.log(arr3[i]);
    }
}
console.log('149#2');
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for(let i in obj){
    if(obj[i] % 2 != 0){
        console.log(obj[i]);
    }
}




