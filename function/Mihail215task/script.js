"use strict";
console.log('215#1');
function SumArr(arr){
	let sum = 0;
	for (let i of arr){
   sum+= i;
	}
	console.log(sum);
}
SumArr([4, 5, 2]);
console.log('215#2');
function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

console.log('215#3');
console.log(getDivisors(12)); 
function StringinMassive(str){
console.log(str.split(''))
}
StringinMassive('3123213');
console.log('215#4');
function revers(str){
	let reverse = '';
	for (let i = str.length - 1; i >= 0; i--){
		reverse += str[i];
	}
	console.log(reverse);
}
revers('hellos');
console.log('215#5');
function capitalizeFirstLetter(str) {
    if (!str) return str; 
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("sdsd")); 
console.log('215#6');
function capitalizeWords(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(capitalizeWords("hello world")); 
console.log('215#7');
function fillArray(n) {
    const array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
}
console.log(fillArray(5)); 
console.log('215#8');
function sumDigits(num) {
    const digits = String(num).split(''); 
    let sum = 0; 

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]); 
    }

    return sum; 
}


console.log(sumDigits(123)); 
console.log('215#9');
function isLeapYear(year) {
    return (year % 4 === 0);
}


console.log(isLeapYear(2020)); 
console.log('215#10');
function secondsToDays(seconds) {
    return Math.floor(seconds / 86400);
}
console.log(secondsToDays(500000)); 
console.log('215#11');
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(getRandomElement(fruits)); 

console.log('215#12');
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(2));  

