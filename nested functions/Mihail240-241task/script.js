"use strict";
console.log('240#1');
Sum(function() {return 1},
function(){return 2},
function(){return 3});
function Sum(num1, num2, num3){
    console.log(num1() + num2() + num3());
}
console.log('241#1-2');
function test(func1, func2, func3){
    console.log(func1() + func2() + func3());
}
function func1(){
    return 1;
}
function func2(){
    return 2;
}
function func3(){
    return 3;
}
test(func1, func2, func3);
let Func1 = function(){return 1};
let Func2 = function(){return 2};
let Func3 = function(){return 3};
test(Func1, Func2, Func3);