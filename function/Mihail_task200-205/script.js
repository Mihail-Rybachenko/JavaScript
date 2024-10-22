"use strict";
console.log('200#1');
function name(){
	console.log('Михаил');
}
name();
console.log('200#2');
function primer(){
	let sum = 0;
	for(let i = 1; i < 101; i++){
		sum+=i;
	}
	console.log(sum);
}
primer();
console.log('201#1');
function cube(num1){
	console.log(num1 ** 3);
}
cube(4);
console.log('201#2');
function otrical(num){
	if(num > 0){
		console.log('+++');
	}
	else{
		console.log('---');
	}
}
otrical(-29);
console.log('202#1');
function summa(num, num1, num2){
	console.log(num + num1 + num2);
}
summa(2, 3, 5);
console.log('203#1');
function func(num, num1, num2){
	console.log(num + num1 + num2);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);
console.log('204#1');
function func1(num = 5) {
	console.log(num * num);
}
func1(2); //4
func1(3); //9
func1();  //25
console.log('204#2');
function func2(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func2(2, 3); //5
func2(3); //3
func2(); //0
console.log('205#1');
function func3(num){
	return num ** 3;
}
let res = func3(3);
console.log(res);
console.log('205#2');
function func4(num){
	return Math.sqrt(num);
}
let res1 = func4(3);
let res2 = func4(4);
console.log(res1 + res2);