"use strict";
console.log('225#1-3');
function func1() {
	return 3;
};
let func2 = func1;
console.log(func1() + func2());
console.log('225#1-3');
let func3 = function(){
	return 1;
}
let func4 = function(){
	return 3;
}
console.log(func3() + func4());