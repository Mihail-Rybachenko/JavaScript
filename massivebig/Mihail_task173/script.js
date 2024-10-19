"use strict";
console.log('173#1');
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = []; 
    
    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1); 
    }
}
console.log(arr);
console.log('173#2');
let arr1 = [];

for (let i = 0; i < 3; i++) {
    arr1[i] = []; 
    
    for (let j = 0; j < 4; j++) {
        arr1[i].push('x'); 
    }
}

console.log(arr1);
console.log('173#3');
let arr2 = [];
for (let i = 0; i < 3; i++) {
    arr2[i] = []; 
    
    for (let j = 0; j < 2; j++) {
        arr2[i][j] = []; 
        
        for (let k = 0; k < 5; k++) {
            arr2[i][j].push(k + 1); 
        }
    }
}

console.log(arr2);
