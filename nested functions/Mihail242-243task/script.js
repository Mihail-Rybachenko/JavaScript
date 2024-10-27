"use strict";
console.log('242#1');
test(function(num) {
	return num ** 3;
});

function test(func) {
	console.log(func(3));
}
console.log('242#2');
test(function func(num) {
	return num ** 3;
});
console.log('242#3');
let func = function(num){
    return num ** 3;
}
test(func);
console.log('242#4');
function test1(func, func1) {
	console.log(func() + func1());
}
test1(function(){
    return 2;
},
function(){
    return 3;
}
)
console.log('243#1');
function test2(num, func1, func2) {
	return func1(num) + func2(num);
}

let square = function(num) {
	return num * num;
};
let cube = function(num) {
	return num * num * num;
};
console.log(test2(3, square, cube)); 
