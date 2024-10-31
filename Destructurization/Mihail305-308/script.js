"use strict";
console.log('305#1');
let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color: c, width: w, height: h} = options;
console.log(c)
console.log('306#1');
let options1 = {
	width:  400,
	height: 500,
};

let {width, height, color = 'black'} = options1;
console.log(height);

console.log('307#1');
let options2 = {
	width:  400,
	height: 500,
};

let {color:c1 = 'black', width:w1, height:h1} = options2;
console.log(w1);