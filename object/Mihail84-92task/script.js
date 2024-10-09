let obj = {
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};
console.log('84#1-2')
console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);
let obj1 = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};
console.log('85#1');
let obj2 = {x: 1, y: 2, z: 3};
obj2.x = obj2.x ** 2;
obj2.y = obj2.y ** 2;
obj2.z = obj2.z ** 2;
console.log(obj2);
console.log('86#1')
let obj4 = {};
obj4.a = 6;
obj4.b = 7;
obj4.c = 0;
obj4.d = 3;
console.log(obj4);
console.log('87#1')
let obj5 = {5: 'd', 3: 's', 7: 'q',};
console.log(obj5[3]);
console.log(obj5[7]);
console.log(obj5[5]);
console.log('88#1');
let obj6 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj6);
console.log(keys);
console.log('89#1')
console.log(Object.keys(obj6).length);
console.log('90#1')
let key = 'z';
console.log(obj6[key]);
console.log('91#1')
let obj7 = {x: 1, y: 2, z: 3};
console.log(obj7['x']);
console.log('91#2')
let obj8 = {x: 1, y: 2, z: 3};
let key1 = 'x';
console.log(obj8[key1]);
console.log('92#1');
let obj9 = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj9[prop]);
console.log('92#2');
let obj10 = {x: 1, y: 2, z: 3};
let prop1 = 'x';
console.log(obj10[prop1]);