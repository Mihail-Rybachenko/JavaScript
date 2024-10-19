"use strict";
console.log('172#1');
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

console.log(sum);

console.log('172#1');


let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum1 = 0;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        for (let k = 0; k < arr1[i][j].length; k++) {
            sum1 += arr1[i][j][k];
        }
    }
}

console.log(sum1);  


