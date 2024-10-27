"use strict";
console.log('250#1');
function func1() {
	return function() {
		return 1;
	};
}

function func2() {
	return function() {
		return 2;
	};
}

let sum = func1()() + func2()();
console.log(sum); 
console.log('251#1')
function func() {
	return function() {
		return function() {
			return function() {
				return function() {
					return '!';
				};
			};
		};
	};
}

console.log(func()()()()()); // выведет '!'
