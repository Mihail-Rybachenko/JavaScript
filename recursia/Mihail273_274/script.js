"use strict";
console.log('274#1');
function func(arr) {
    if (arr.length === 0) {
        return;
    }
    
    console.log(arr[0]);
    
    func(arr.slice(1));
}

let arr = [1, 2, 3, 4, 5];
func(arr);
