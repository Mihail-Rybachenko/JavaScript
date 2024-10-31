"use strict";
console.log('276#1');
function printPrimitives(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            printPrimitives(obj[key]); 
        } else {
            console.log(obj[key]); 
        }
    }
}

let obj = {
    a: 1,
    b: {c: 2, d: 3, e: 4},
    f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
};

printPrimitives(obj);
console.log('276#2');

function flattenArray(arr) {
    let result = [];
    
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            result = result.concat(flattenArray(elem)); 
        } else {
            result.push(elem); 
        }
    }
    
    return result;
}

let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let flatArray = flattenArray(arr);
console.log(flatArray); 
