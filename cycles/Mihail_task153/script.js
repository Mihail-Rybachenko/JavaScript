"use strict";
console.log('153#1');
for (let i = 10; i < 1000; i++) {
	let str = String(i); 
		console.log(str[0]);
}
console.log('153#2');
for (let i = 10; i <= 1000; i++) {
	let str1 = String(i); 
		console.log(Number(str1[0]) + Number(str1[1]));
}
console.log('153#3');
for (let i = 10; i <= 1000; i++) {
	let str1 = String(i); 
    if(str1[0] == '1'){
        console.log(str1)
    }
		
}
console.log('153#4');
for (let i = 10; i <= 1000; i++) {
	let str1 = String(i); 
		if(Number(str1[0]) + Number(str1[1]) == 5){
            console.log(str1)
        }
}