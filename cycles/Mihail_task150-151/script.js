"use strict";
console.log('150#1');
let sum = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        sum+=i;
    }
}
console.log(sum);
console.log('150#2');
let sum1 = 0;
for(let i = 1; i <= 99; i++){
    if(i % 2 != 0){
        sum1+=i;
    }
}
console.log(sum1);
console.log('150#3');
let sum2 = 1;
for(let i = 1; i <= 20; i++){
        sum2*=i;
}
console.log(sum2);
console.log('151#1');
let arr = [2, 5, 9, 3, 1, 4];
let sum3 = 0;
for(let i of arr){
    sum3+=i;
}
console.log(sum3);
console.log('151#2');
let sum4 = 0;
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0)
    {
    sum4+=arr[i];
    }
}
console.log(sum4);
console.log('151#3');
let sum_square = 0;
for(let i = 0; i < arr.length; i++){
    sum_square+=arr[i] * arr[i];
}
console.log(sum_square);
console.log('151#4');
let sum5 = 1;
for(let i = 0; i < arr.length; i++){
    sum5*=arr[i];
}
console.log(sum5);