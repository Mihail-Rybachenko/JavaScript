"use strict";
console.log('277#1');
function sumObjectElements(obj) {
    let sum = 0;
    
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += sumObjectElements(obj[key]); 
        } else {
            sum += obj[key]; 
        }
    }
    
    return sum;
}

let obj = {
    a: 1,
    b: {c: 2, d: 3, e: 4},
    f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
};

console.log(sumObjectElements(obj)); 
console.log('277#2');

function joinArrayElements(arr) {
    let result = '';
    
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            result += joinArrayElements(elem); 
        } else {
            result += elem; 
        }
    }
    
    return result;
}

let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
console.log(joinArrayElements(arr)); 
console.log('278#1');
function squareElements(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            arr1[i] = squareElements(arr1[i]); 
        } else if (typeof arr1[i] === 'number') {
            arr1[i] = arr1[i] ** 2; 
        }
    }
    
    return arr1;
}

let arr1 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(squareElements(arr1)); 
