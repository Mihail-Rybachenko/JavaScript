"use strict";
console.log('269#1');
(function() {
	return function(){
return function(){
    console.log('!')
}
    }
})()()();
console.log('269#2');
(function(num1) {
	return function(num2){
console.log(num1 + num2);
    }
})(1)(2);

console.log('269#3');
(function(num1) {
	return function(num2){
        return function(num3){
            console.log(num1 + num2 + num3);
        }
    }
})(1)(2)(3);
console.log('272#1-2')
let func = (function() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
        if (num > 5){
            num = 1;
        }
	}
})();

func(); 
func(); 
func(); 
func(); 
func();
func(); 
func();  