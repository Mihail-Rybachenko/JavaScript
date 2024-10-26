"use strict";
console.log('237#1-2');

let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];
console.log(arr[2]());
console.log('237#3');
console.log(arr[0]() + arr[1]() + arr[2]());
console.log('237#4');
let sum = 0;
for (let i of arr){
     sum += i();
}
console.log(sum);
console.log('238#1');
let obj = {
	func1: function() { return 1; },
	func2: function() { return 2; },
	func3: function() { return 3; }
};

let sum1 = obj.func1() + obj.func2() + obj.func3();
console.log(sum1); 
console.log('238#2');
for (let key in obj) {
	console.log(obj[key]());
}
console.log('239#1');
let math = {
	sum: function(arr) {
        let sum = 0;
        for (let i of arr){
            sum+=i;
        }
        return sum;
        },
	
        square: function(arr)
    {
        let sum = 0;
        for (let i of arr){
            i = i * i;
            sum+=i;
        }
        return sum;
    },
    cube: function(arr)
    {
        let sum = 0;
        for (let i of arr){
            i = i ** 3;
            sum+=i;
        }
        return sum;
    },
};
console.log(math.sum([2, 3, 5, 4]) ); 
console.log(math.square([10, 11]) );
console.log(math.cube([10, 2]) );