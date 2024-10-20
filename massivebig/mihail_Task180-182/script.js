"use strict";
console.log('180#1');
let employees1 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employee of employees1) {
	console.log(employee.name + ' - ' + employee.salary);
}
console.log('180#2');
let employees2 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

let totalSalary = 0;

for (let employee of employees2) {
	totalSalary += employee.salary;
}

console.log('Total Salary:', totalSalary);
console.log('180#3');
let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let totalSalary30Plus = 0;

for (let employee of employees3) {
	if (employee.age >= 30) {
		totalSalary30Plus += employee.salary;
	}
}

console.log('Total Salary (30+):', totalSalary30Plus);
console.log('181#1');
let months = {
	'ru': [
		'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',
	],
	'en': [
		'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',
	],
};

let lang = 'ru';  
let month = 7;    
console.log(months[lang][month]);
console.log('181#2');
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
};

let year = 2019;
let month1 = 12;
let day = 30;

console.log(affairs[year][month1][day]);
console.log('181#3');
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
};

let key1 = 'key2';
let key2 = 'key4';


console.log(obj[key1][key2]); 
console.log('181#4-5');
let obj1 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
};

let key3 = 'key2';
let key4 = 'key4';


console.log(obj1[key3][key4]); 
console.log('181#6');
let obj3 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
};

let key6 = 'key2';


console.log(obj3[key6]['key4']); 

console.log('182#1');
let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];

employees.push({
	name: 'name4',
	salary: 600,
	age: 31
});

console.log(employees);
