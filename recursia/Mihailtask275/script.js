"use strict";
console.log('275#1');
function getSumOfSquares(arr) {
    let sum = arr.shift() ** 2;
    
    if (arr.length !== 0) {
        sum += getSumOfSquares(arr);
    }
    
    return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(getSumOfSquares(arr));
