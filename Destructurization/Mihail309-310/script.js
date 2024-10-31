"use strict";
console.log('309#1');
function func([name, surname, department, position, salary]) {
	console.log(name);       
	console.log(surname);    
	console.log(department); 
	console.log(position);   
	console.log(salary);     
}

func(['John', 'Smit', 'development', 'programmer', 2000]);
console.log('309#2');
function func2([name, surname, ...info]) {
	console.log(name);    
	console.log(surname); 
	console.log(info);    
}

func2(['John', 'Smit', 'development', 'programmer', 2000]);
console.log('309#3');
function func3([name, surname, department, position = 'джуниор']) {
	console.log(name);       
	console.log(surname);    
	console.log(department); 
	console.log(position);   
}

func3(['John', 'Smit', 'development']);
console.log('309#4');
function func4(department, [name, surname], [year, month, day]) {
	console.log(department); 
	console.log(name);       
	console.log(surname);    
	console.log(year);       
	console.log(month);
	console.log(day);        
}

func4('development', ['John', 'Smit'], [2018, 12, 31]);
console.log('310#1');
function func5({ color, width, height }) {
	console.log(color);  
	console.log(width);  
	console.log(height); 
}

func5({ color: 'red', width: 400, height: 500 });

console.log('310#2');
function func6({ width, height, color = 'black' }) {
	console.log(color);  
	console.log(width);  
	console.log(height); 
}

func6({ color: 'red', width: 400, height: 500 });
