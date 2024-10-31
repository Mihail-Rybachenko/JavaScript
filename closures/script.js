"use strict";
console.log('261#1-2')
function test() {
	let num = 10;
	
	return function() {
		console.log(num);
		num--;
		if(num < 0){
			console.log('Счет окончен');
		}
	}
}
let func = test();

func(); 
func();
func(); 
func(); 
func();
console.log('261#3');

let func1 = test();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();

