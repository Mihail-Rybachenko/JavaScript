"use strict";
console.log('214#1');
function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );
console.log('214#2');
function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
		
	}
    return res;
}

console.log(sum([1, 2, 3, 4, 5]));
console.log('214#3');
function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
}
func([1, 2, 3, 4, 5]);
console.log('214#4');

function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );


console.log('214#5');
function sum1(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}
console.log(sum1([1, 2, 3, 4, 5]));
console.log('214#6');


function sum3(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
    return sum;
}
let res = sum3([1, 2, 3, 4, 5]);
console.log(res);
console.log('214#7');
function add(num) {
	if (num <= 9) {
		return num + '0';
	}
}
console.log(add(3));
console.log('214#8');
let arr = [1, 2, 3, 4, 5];
let totalSum  = sum(arr);
console.log(totalSum);

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}
console.log('214#9');
let num = 12345;
let res1 = getDigitsSum(num);
console.log(res1);

function getDigitsSum(num) {
    let arr = num.toString().split('');  
    let sum = 0;
    
    for (let elem of arr) {
        sum += Number(elem);  
    }
    
    return sum;
}

console.log('214#10');
function isPrime(num) {
    if (num <= 1) return false; 

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}

console.log(isPrime(13)); 
