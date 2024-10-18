"use strict";
console.log('170#1');
let arr = [
	[1, 2, 3, [4, 5, [6, 7]]],
	[8, [9, 10]]
];
console.log(arr[0][0] +  // 1
    arr[0][1] +  // 2
    arr[0][2] +  // 3
    arr[0][3][0] +  // 4
    arr[0][3][1] +  // 5
    arr[0][3][2][0] +  // 6
    arr[0][3][2][1] +  // 7
    arr[1][0] +  // 8
    arr[1][1][0] +  // 9
    arr[1][1][1]);
	console.log('171#1');
	let arr2 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArr of arr2) {
	for (let elem of subArr) {
		sum+=elem;
	}

}
console.log(sum);

console.log('171#2');
let arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum1 = 0;
for (let subArr of arr3) {
	for (let elem of subArr) {
		for(let i of elem){
			sum1+=i;
		}
		
	}

}
console.log(sum1);