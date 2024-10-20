"use strict";
console.log('176#1');
let obj1 = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
};

let sum1 = 0;

for (let key in obj1) {
	for (let innerKey in obj1[key]) {
		sum1 += obj1[key][innerKey];
	}
}

console.log(sum1);
console.log('176#2');
let obj2 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
};

console.log(obj2[2][2]); 
console.log(obj2[3][1]); 
console.log('176#3');
let obj3 = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
};


let sum3 = 1 + 2 + 3 + 4 + 5 + 6 + 7;

console.log(sum3); 
console.log('177#1');
let obj4_1 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
};

let sum2 = 0;

for (let key in obj4_1) {
	let subObj = obj4_1[key];
	
	for (let subKey in subObj) {
		sum2 += subObj[subKey];
	}
}

console.log(sum2); 

console.log('177#2');
let obj4 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
};

let sum4 = 0;

for (let key1 in obj4) {
	let subObj1 = obj4[key1];
	for (let key2 in subObj1) {
		let subObj2 = subObj1[key2];
		for (let key3 in subObj2) {
			sum4 += subObj2[key3];
		}
	}
}

console.log(sum4); 


