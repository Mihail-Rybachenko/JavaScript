"use strict";
console.log('281#1');
let arr = [3, 2, 4, -4, -9, 11];
let res = arr.filter(function(elem){
    if (elem > 0){
return true;
    }
else {
    return false;
}
});
console.log(res);
console.log('281#2');
let otrical = arr.filter(function(elem){
    if (elem < 0){
return true;
    }
else {
    return false;
}
});
console.log(otrical);
console.log('281#3');
let result = arr.filter(function(elem){
    if (elem > 0 && elem < 10){
return true;
    }
else {
    return false;
}
});
console.log(result);
let str = ['sd', 'xcc', 'dfddg', 'ewwwwww'];
console.log('281#4');
let result4 = str.filter(function(elem){
    if (elem.length > 5){
return true;
    }
else {
    return false;
}
});
console.log(result4);
console.log('281#5');
let result5 = arr.filter(function(elem, index){
    if (elem * index < 30){
return true;
    }
else {
    return false;
}
});
console.log(result5);
console.log('281#6');
let arr6 = [1, 2, [3, 4], 5, [6, 7]];

let result6 = arr6.filter(function(elem) {
    return !Array.isArray(elem);
});

console.log(result6); 
